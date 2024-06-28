[Return back](../readme.md)

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# [Explication code source ↲](./src/project/README.md)

## Introduction à NestJS

NestJS est un framework pour construire des applications backend en Node.js. Il utilise TypeScript comme langage principal et est construit autour de concepts modulaires et orientés objet. Voici une explication simple et concise de son fonctionnement et de son concept.

### Principes de Base

#### 1. Modularité

NestJS encourage une architecture modulaire. Les fonctionnalités de l'application sont organisées en modules, qui sont des groupes de composants logiquement liés. Chaque module encapsule un domaine de responsabilité spécifique, rendant l'application plus facile à gérer et à évoluer.

```typescript
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

#### 2. Contrôleurs (Controllers)

Les contrôleurs sont responsables de gérer les requêtes entrantes et de retourner les réponses au client. Ils définissent des routes et traitent les requêtes HTTP.

```typescript
@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Res res: Response): Response {
    //This action returns all cats
    res.status(HttpStatus.OK).json(cats);
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    //This action returns a #${id} cat
    res.status(HttpStatus.OK).json(cat);
  }

  @Post()
  create(@Body() body: Zod.infer<type of catSchema>): string {
    //This action creates a new cat
    res.status(HttpStatus.CREATED).json(cat);
  }
}

```

#### 3. Services (Providers)

Les services contiennent la logique métier de l'application. Ils peuvent être injectés dans des contrôleurs ou d'autres services grâce au système d'injection de dépendances de NestJS.

```typescript
@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  findAll(): Cat[] {
    return this.cats;
  }
}
```

#### 4. Décorateurs

NestJS utilise des décorateurs pour définir les composants et leurs relations. Par exemple, @Module pour définir un module, @Controller pour un contrôleur, @Injectable pour un service, et des décorateurs comme @Get, @Post pour définir des routes.

```typescript
@Post()
  @UsePipes(new ValidationPipe(catSchema))
  create(@Body() body: Zod.infer<type of catSchema>): string {
    //This action creates a new cat
    res.status(HttpStatus.CREATED).json(cat);
  }
```

Ici, @UsePipes est un décorateur qui applique un pipe à une route donnée. Dans cet exemple, un pipe de validation est utilisé pour valider les données d'entrée.

#### 5. Middleware

Les middlewares sont des fonctions qui peuvent transformer la requête ou la réponse. Ils sont exécutés avant que la requête atteigne le contrôleur.

```typescript
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    next();
  }
}
```

#### 6. Pipes

Les pipes sont utilisés pour la transformation et la validation des données des requêtes. Ils peuvent être appliqués au niveau du paramètre, du gestionnaire de route, ou globalement.

```typescript
@Injectable()
export class ParseIntPipe implements PipeTransform<string, number> {
  transform(value: string): number {
    const val = parseInt(value, 10);
    if (isNaN(val)) {
      throw new BadRequestException('Validation failed');
    }
    return val;
  }
}
```

#### 7. Guards

Les guards déterminent si une requête donnée doit être traitée par le routeur. Ils sont souvent utilisés pour l'authentification et l'autorisation.

```typescript
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    return validateRequest(request);
  }
}
```

#### 8. Intercepteurs (Interceptors)

Les intercepteurs sont utilisés pour transformer les résultats retournés par les routes ou pour gérer les exceptions de manière centralisée.

```typescript
@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    return next.handle().pipe(map(data => ({ data })));
  }
}
```

#### 9. Architecture de l'Application

Comme vue précédemment, NestJS encourage une architecture modulaire et orientée objet. Les composants de l'application sont organisés en modules, qui contiennent des contrôleurs, des services, des middlewares, des pipes, des guards, et des intercepteurs, etc

- Structure d'un module : (cat)

```plaintext
./
├── cat.module.ts                      # module principal (contient les imports des autres fichiers du module)
├── cat.controller.ts                  # contrôleur du module (il contient les routes, il n'y en qu'un par module)
├── services
│   └── cat.service.ts                 # service du module (contient la logique métier)
├── middlewares
│   └── logger.middleware.ts
├── pipes
│   └── parse-int.pipe.ts
├── guards
│   └── auth.guard.ts
├── interceptors/hooks
│   └── transform.interceptor.ts
├── DTOs
│   └── cat.dto.ts                    # si vous utilisez des DTOs
└── schemas                           # pas besoin de créer un dossier schemas et vice versa
    └── cat.schema.ts
```

:warning: Les modules peuvent être importés dans d'autres modules pour créer une architecture modulaire et réutilisable.

## Avantages de NestJS

- Architecture Modulaire : Facilite la gestion et l'évolution de l'application.
- TypeScript : Offre une meilleure sécurité de type et des fonctionnalités modernes du langage.
- Injectivité des Dépendances : Facilite la gestion des dépendances et améliore la testabilité.
- Support des Standards : Compatibilité avec les standards modernes de Node.js et de JavaScript.

## Conclusion

NestJS est un framework puissant et flexible pour construire des applications backend robustes. Sa structure modulaire et ses concepts orientés objet facilitent la gestion des grandes applications et encouragent les bonnes pratiques de développement.


## Installation

```bash
$ npm install
```

## Commandes utiles

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
