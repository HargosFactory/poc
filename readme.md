<p align="center">
  <a href="#" target="blank"><img src="https://eurailscout-france.fr/wp-content/uploads/2020/06/LOGO-ERS-ret.png" width="200" alt="Eurailscout Logo" /></a>
</p>

## Description

- Le but de ce projet est de créer un POC pour la société Eurailscout France.
- Ce poc à pour objectif de perrmettre une saisie des temps plus simple et plus rapide pour les salariés de la société avec une data visualisation des temps plus claire et plus précise.

## Projet

- Le projet est composé de deux parties :
  - Un serveur REST API (Nest) qui fait office de middlewar entre l'API de SAP et l'application web (Vue).
  - Un client web (Vue) qui permet de visualiser les données et de les modifier.

## Technologies utilisées

- [NestJS](https://nestjs.com/) 
- [VueJS](https://vuejs.org/)

## Fonctionnement technique

- [Explication sur le fonctionnement de NestJS en seins du projet](./nest/README.md)
- [Explication sur le fonctionnement de VueJS en seins du projet](./vue/README.md)

## Fonctionnalités demandées

- [ ] Récuperer les données de SAP
- [x] Ajouter des données dans SAP
- [x] Afficher les données dans l'application web
- [x] construire un formulaire pour ajouter des données
- [x] contruire l'application web en utilisant les web components SAP

## Installation

### 1 - Cloner le projet

```bash
git clone ####
```

### 2 - Configurer le fichier .env

```bash
cp .env.example .env # puis completer les informations (username, password)
```

:warning: Pour la premiere installation, il faut installer les dépendances du serveur et du client.
Pour cela, il faut se rendre dans le fichier docker-compose.yml et modifier les lignes command pour les deux services (server et client) en ajoutant command npm install. (exemple en commantaire dans le fichier)
une fois fait, il faut lancer la commande suivante :
:warning: avant tous ca, il est nécéssaire d'installer docker et docker-compose sur votre machine.

```bash
docker compose up
```

Une fois les dépendances installées, il faut remettre les commandes d'origine.

### 3 - Lancer le projet

```bash
docker compose up
```

**- PS:** Pour ce qui ne souhaite pas utiliser docker, il est possible de lancer le serveur et le client en local. Pour cela, il faut se rendre dans les dossiers server et client et lancer la commande npm install puis npm run start:dev pour le serveur et npm run dev pour le client.
la version de node utilisée est la 20.11.1.
:warning: Cependant, les host de toutes requetes http sont configurées pour être en localhost. (sorry je n'ai pas pensé à mettre les host dans l'env pour rendre le projet plus flexible)

## Auteurs

- [**William FLORENTIN**]("https://github.com/ZeRiix")