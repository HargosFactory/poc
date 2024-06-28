[Return back](../../README.md)

# Fonctionnement du module "Project"

## Architecture

Le module "Project" est composé de plusieurs éléments :

```plaintext
├── project.module.ts
├── project.controller.ts
├── mock.json
├── hooks
│   └── csrfTimeSheetPost.hook.ts
└── schemas
    └── timeSheet.schema.ts
```

- `project.module.ts` : module principal (contient les imports des autres fichiers du module)
- `project.controller.ts` : contrôleur du module (il contient les routes, il n'y en qu'un par module)
- `mock.json` : fichier de données de test pour la route GET /project
- `hooks` : dossier contenant les hooks (intercepteurs) du module
- `schemas` : dossier contenant les schemas ([Zod](https://zod.dev/)) du module

## Fonctionnement

- Le module **"Project"** contient:
  - Une route GET `/project` qui permet de récupérer les données de test du fichier `mock.json`.
  - Use Route POST `/project` qui permet d'ajouter des données dans le fichier `mock.json` et d'enregistrer les données dans SAP.
  - Un hook `csrfTimeSheetPost` qui permet de récuperer le token CSRF pour les requêtes de d'inserstion ou de modification de données dans SAP. (POST, PUT, DELETE)

### Contrôleur

Le contrôleur `project.controller.ts` contient les routes du module.

```typescript
@Controller('project')
export class ProjectController {
  public wrappedAxios: any;
   // instanciation de l'axios wrapper pour les requêtes HTTP suivies du token CSRF
  constructor() {
    this.wrappedAxios = wrapper(axios);
  }

  @Get()
  async Project(@Res() res: Response) {
    try {
      const file = fs.readFileSync(path.join(__dirname, 'mock.json'), 'utf8'); // récupération des données de test dans le fichier mock.json
      res.status(HttpStatus.OK).json(JSON.parse(file).data); // envoi des données au client
    } catch (err) {
      ...
    }
  }

  @Post()
  @UseInterceptors(new CsrfTimeSheetPostInterceptor())
  async getProject(
    @Req() req: any,
    @Body() body: Zod.infer<typeof postTimeSheet>,
    @Res() res: Response,
  ) {
    try {
        ...// traitement sur les données

        const configPost = {
        method: 'post',
        url: env.URL_WORK_SHEET,
        headers: {
          Authorization:
            'Basic ' +
            Buffer.from(
              `${env.USERNAME_WORK_SHEET}:${env.PASSWORD_WORK_SHEET}`,
            ).toString('base64'), // ajout du token d'authentification ( la fonction Buffer.from permet de convertir le token en base64 pour l'envoyer dans le header de la requête POST du client)
          'x-csrf-token': req.headers['X-CSRF-Token'], //  ajout du token CSRF ( le token est récupéré dans le hook csrfTimeSheetPost.hook.ts et ajouter dans le header de la requête POST du client pour simplifier ca récupération dans le controller)
          'Content-Type': 'application/json',
          dataserviceversion: '2.0',
          cookie: req.cookieJar.getCookieStringSync(env.URL_WORK_SHEET), // récupération du cookie (la jar est instanciée dans le hook csrfTimeSheetPost.hook.ts)
        },
        data: {
          ... // données à envoyer
        },
        withCredentials: true,
      };
        await this.wrappedAxios(configPost) // requête POST vers SAP
        .then((response) => {
          res.status(HttpStatus.OK).json(response.data.d.results); // envoi des données au client
        })
        .catch((err) => {
          throw new BadRequestException(err); // gestion des erreurs
        });
    } catch (err) {
        ...
    }
}
```

Dans cet exemple, le contrôleur `ProjectController` contient deux routes :

GET `/project` : qui permet de récupérer les données de test du fichier `mock.json`.
    - La route utilise la méthode `fs.readFileSync` pour lire le contenu du fichier `mock.json` et la méthode `res.status(HttpStatus.OK).json` pour envoyer les données au client.

    Déroutement de la requête GET `/project` :
    - Le client envoie une requête GET au serveur.
    - Le serveur lit le contenu du fichier `mock.json`.
    - Le serveur envoie les données au client afin d'afficher les données dans un tableau.

POST `/project` : qui permet d'ajouter des données dans le fichier `mock.json` et d'enregistrer les données dans SAP.
    - La route utilise la méthode `wrapper` pour instancier un wrapper Axios qui permet de suivre les requêtes HTTP et le token CSRF.
    - La route utilise la méthode `req.headers['X-CSRF-Token']` pour récupérer le token CSRF.
    - La route utilise la méthode `Buffer.from` pour convertir le token en base64 et l'ajouter dans le header de la requête POST du client.
    - La route utilise la méthode `req.cookieJar.getCookieStringSync` pour récupérer le cookie.
    - La route utilise la méthode `this.wrappedAxios(configPost)` pour envoyer les données à SAP.
    - La route utilise la méthode `res.status(HttpStatus.OK).json` pour envoyer les données au client.
    :warning: Axios est un client HTTP basé sur les promesses pour le navigateur et Node.js. Il permet de faire des requêtes HTTP vers des serveurs distants. Il est utilisé ici pour envoyer des données à SAP.

    Déroulement de la requête POST `/project` :
    - Le client envoie une requête POST au serveur.
    - Le serveur récupère le token CSRF et le cookie via le hook `csrfTimeSheetPost` et stock le token CSRF dans le header de la requête POST du client et le cookie dans une jar (une jar est un conteneur pour les cookies).
    - Le serveur effectue un premier traitement sur les données envoyées par le client, ici il s'agit de la validation des données et d'un convertion en timestamps. il effectue aussi une modification des données du fichier mock.json pour ajouter les données envoyées par le client afin de données l'illusion que la request GET /project retourne les données de SAP.
    - Le serveur construit la requête POST vers SAP avec les données du client, le token CSRF et le cookie.
    - Le serveur envoie la requête POST à SAP.
    - SAP traite la requête et renvoie une réponse au serveur.
    - Le serveur renvoie la réponse de SAP au client/appli web pour lui indiquer un comportement ou infi info à retourner à l'utilisateur.

### Schema

Le schema `timeSheet.schema.ts` contient le schema Zod pour la validation des données du module.

```typescript
import { z } from 'zod';

export const postTimeSheet = z.object({
  start: z.string({ message: 'start is required'}),
  end: z.string().min(1OO).max(300).optional(),
  sup: z.boolean().default(false),
});

export type postTimeSheet = z.infer<typeof postTimeSheet>;
```

Dans cet exemple, le schema `postTimeSheet` à 2 fonctions :
    - il est utiliser pour valider les données envoyées par le client dans la requête POST `/project` à la manière d'une DTO.
    - il est aussi utilisé utilisé pour typer les données à travers la fonction `Zod.infer<typeof postTimeSheet>` dans le contrôleur `ProjectController`.

Zod est une bibliothèque de validation de schémas TypeScript. Elle permet de valider les données en fonction de schémas définis. Elle est utilisée ici pour valider les données envoyées par le client dans la requête POST `/project`.

La grande force de Zod, réside danca simplicité et ca clareté. Elle permet de définir des schémas de validation de données de manière simple et intuitive.
Il peut aussi être créer à la volée pour des cas d'utilisation spécifique.
Il permet également une gestion des erreurs simple à travers la l'intégration d'un objet avec la clé "message" dans une fonction de parsing, dans l'exemple ci-dessus, le message d'erreur est personnalisé pour le champ `start`.

Cette méthode n'est pas possible avec une DTO classique.
A l'inverse d'une interface, Zod permet de définir des objets de contrainte de manière plus précise et plus robuste.
Elle permet aussi de définir des contrainte autre que les types de données (exemple: la longueur d'une chaine de caractère, la présence d'une clé dans un objet, etc...).
Zod combine la puissance de TypeScript avec la simplicité de la validation de données.

:warning: Je déconseille très fortement l'utilisation de libraries visant à customiser le comportement des DTOs (exemple: class-validator, class-transformer) car meme si elle permettent de définir des contraintes à la manière de Zod, les Perfermances sont très mauvaises et la gestion des erreurs est très compliquée car le code est non implicite (couche de magie).
Pour faire simple ne pas écouter la doc de Nest sur le sujet :,)

### Hook

```typescript
@Injectable()
export class CsrfTimeSheetPostInterceptor
  extends CsrfHookWithUsernameAndPassword
  implements NestInterceptor
{
  constructor(
    // instanciation des variables de class étendu (abstract)
    protected readonly csrfUrl: string = env.URL_WORK_SHEET,
    protected readonly username: string = env.USERNAME_WORK_SHEET,
    protected readonly password: string = env.PASSWORD_WORK_SHEET,
  ) {
    super();
  }

  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest(); // catch de la request du client 

    await this.ensureCsrfToken(this.csrfUrl);
    request.headers['X-CSRF-Token'] = this.csrfToken; // rangement des csrf dans la req du client afin de siplifier l'acces de la données dans le controller (je déconseille de faire ca)

    return next.handle().pipe( // envoie de la request au controller (pour faire simple)
      tap(async () => {
        await this.fetchCsrfToken(this.csrfUrl);
      }),
    );
  }
}

// class étendu: 
const wrappedAxios = wrapper(axios); // instanciation d'un client http "d'instance"

export abstract class CsrfHookWithUsernameAndPassword {
  // déclaration des variables et instaciation de jar
  protected csrfToken: string;
  protected username: string;
  protected password: string;
  protected cookieJar = new tough.CookieJar(); // création d'une jar

  private async fetchCsrfToken(url: string): Promise<void> {
    try {
      const res = await wrappedAxios.get(url, { // envoie d'une request GET pour récuperer le token CSRF et le cookie associé
        headers: {
          Authorization:
            'Basic ' +
            Buffer.from(`${this.username}:${this.password}`).toString('base64'),
          'x-csrf-token': 'fetch', // construction de l'authentification (blabla explication)
        },
        jar: this.cookieJar, // accrochage de la jar sur la request pour catch automatiquement cookie qui sera retourné
        withCredentials: true,
      });
      this.csrfToken = res.headers['x-csrf-token']; // récuperation dans csrf token
    } catch (error) {
      console.error('Failed to fetch CSRF token', error);
    }
  }

  protected async ensureCsrfToken(url: string): Promise<void> {
    if (!this.csrfToken) {
      await this.fetchCsrfToken(url); 
    }
  }
}
```

Dans cet exemple, le hook `CsrfTimeSheetPostInterceptor` permet de récupérer le token CSRF pour les requêtes de d'inserstion ou de modification de données dans SAP. (POST, PUT, DELETE)
Cette intercepteur/hook est voué à etre réutilisé dans d'autres modules pour simplifier la récupération du token CSRF.
créatoi de variante en fonction de la methode d'autentification (ici basic authentification) et de la récupération du token CSRF.
Je ne rentre pas dans les détails de la récupération du token CSRF car c'est un sujet très complexe et très spécifique.
Avant de comprendre le fonctionnement réel d'un intercepteur, il est important de comprendre le fonctionnement technique du routage.