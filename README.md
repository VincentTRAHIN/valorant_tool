# Ludexo-VALORANT #v.1


<p align="center">
  <img src="https://media.valorant-api.com/maps/2fb9a4fd-47b8-4e7d-a969-74b4046ebd53/splash.png" alt="Texte alternatif">
</p>

## Deux difficultés :
- Mode Harcore(Henri) => Lance toi sans regarder les étapes ci-dessous 😈
- Mode Normal => Suit les étapes ci-dessous 😁

**Pour rappel, cette exercice n'est pas obligatoire et je vous conseil de le faire à plusieurs 😘**

_________________________________________________________________________
### 🚀 Étape 1 - Installez les dépendances :

```bash
npm install
```
_________________________________________________________________________
### 📁 Étape 2 - Créez les dossiers nécessaires :

- Créez un dossier "middleware" à la racine de votre projet.
- Créez un dossier "public" à la racine de votre projet.
  - À l'intérieur du dossier "public", créez les sous-dossiers suivants :
    - "css"
    - "images"
    - "js"
- Créez un dossier "app" à la racine de votre projet.
  - À l'intérieur du dossier "app", vous pouvez créer :
    - À la racine de "app", créez un fichier "router.js".
    - Un dossier "controller".
    - Un dossier "views".
      - À l'intérieur du dossier "views", créez un dossier "partials".
_________________________________________________________________________
### 📄 Étape 3 - Créez un fichier "index.js" à la racine de votre projet.

_________________________________________________________________________
### 🚀 Étape 4 - Dans votre fichier "index.js", commencez par démarrer le serveur :

```js
const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log("Le serveur est en ligne sur le port 3000 !");
});

```
*on lance le serveur avec la commande nodemon index.js Et on vérifie que l'on a bien ce message dans le terminal : "Le serveur est en ligne sur le port 3000 !"*
_________________________________________________________________________
### 🎨 Étape 5 - Définissez le moteur de rendu (View Engine) dans index.js avant l'écoute :

```js
app.set('view engine', 'ejs');
app.set('views', './app/views');
```
_________________________________________________________________________
### 📂 Étape 6 - Définissez le chemin des fichiers statiques (public) dans index.js avant l'écoute et les views:

```js
const path = require('path');

app.use(express.static(path.join(__dirname, './public')));
```
*On pense bien à regrouper les choses 😉. Les requires avec les requires*
_________________________________________________________________________
### 🔀 Étape 7 - Importez et utilisez les routes dans index.js avant l'écoute et les views:

```js
const router = require('./app/router');

app.use(router);
```
*On pense bien à regrouper les choses 😉. Les requires avec les requires*
_________________________________________________________________________
### 🔧 Étape 8 - Définissez les variables globales pour être réutilisées dans l'application :

```js
const champions = require('./data/champions');

app.locals.champions = champions;
```
**On fait la même choses pour les maps 💪**
*On pense bien à regrouper les choses 😉. Les requires avec les requires*
_________________________________________________________________________
### 🌐 Étape 9 - Créez la page d'accueil "index.ejs" :

- Créez un fichier "index.ejs" dans le dossier "views".
- Copiez le code du fichier "index.html" existant dans le dossier "template_static" et collez-le dans "index.ejs".
- On n'oublie pas de mettre le fichier css index.css dans notre dossier public/css
_________________________________________________________________________
### 🚀 Étape 10 - Créez la route pour afficher "index.ejs" :

- Dans le fichier "router.js", importez les éléments suivants :
```js
const { Router } = require('express');
const router = Router();
```
- Créez une route pour l'URL '/' avec la méthode GET.
- Utilisez res.render pour rendre le fichier "index.ejs".
- Allez sur votre localhost:3000 et regardez si vous avez bien quelque chose qui s'affiche.
_________________________________________________________________________
### 🔢 Étape 11 - Créez une autre route pour afficher la liste des champions :

- Créez un fichier "champions.ejs" dans le dossier "views" et copiez-collez le contenu du fichier "champions.html" existant.
- On n'oublie pas de mettre le fichier css dans notre dossier public/css
- Dans le fichier "router.js", dans la route "/champions" (à créer), récupérez le tableau des champions défini dans les variables globales : `const { champions } = req.app.locals;`
- Utilisez  `res.render` pour rendre la view "champions" en passant le tableau des champions en tant que variable.
- Dynamiser votre fichier ejs avec le tableau "champions" que vous avez fait passer dans votre view.
  - On remarque des petits commentaires dans le fichier ex :<!-- displayName -->. Cela vous donnera des idées pour vos balises <%= %>. Par exemple champion.displayName (après une boucle ;) )
    - Repérer ce qui est subceptible de changer et mettez des <%= %> à la place des noms, img, a, etc ...
    - Attention on remarque qu'il y a beaucoup d'élément qui ce répéte non ? Comment on peut faire pour limiter le code dans notre fichier ejs ?
- Essayez la route via votre `localhost:3000/champions`
_________________________________________________________________________
### 💪 Étape 12 - Créez une autre route pour afficher un champion spécifique :

- Créez un fichier "champion.ejs" dans le dossier "views" et copiez-collez le contenu du fichier "champion.html" existant.
- On n'oublie pas de mettre le fichier css dans notre dossier public/css
- Dans le fichier "router.js", dans la route "/champions/:championName" (à créer), récupérez le tableau des champions défini dans les variables globales : `const { champions } = req.app.locals;`
- Suivant le `req.params.championName` on va parcourir notre tableau champion à l'aide d'une méthode find ou filter et on stocke le résultat dans une variable. (On n'oublie pas de comparait les choses en ??lowerCase() 😉 et de faire un return 💪
- Utilisez  `res.render` pour rendre la view "champion" en passant votre variable champion en tant que variable.
- Dynamiser votre fichier ejs avec votre variable "champion" que vous avez fait passer dans votre view.
- On remarque des petits commentaires dans le fichier ex :<!-- displayName -->. Cela vous donnera des idées pour vos balises <%= %>. Par exemple champion.displayName
  - Repérer ce qui est subceptible de changer et mettez des <%= %> à la place des noms, img, a, etc ...
  - Attention on remarque qu'il y a beaucoup d'élément qui ce répéte non ? Comment on peut faire pour limiter le code dans notre fichier ejs ?
- Essayez la route via votre `localhost:3000/champions/geeko`
_________________________________________________________________________
### 💪 Étape 13 - Créez les routes pour afficher la liste des maps et une map spécifique :

- Répétez les étapes 11 à 12 mais avec maps 😊
_________________________________________________________________________
## Notions plus avancées (avec juste ce qu'il faut faire)

### 🎮 Étape 14 - Refacto :
- On remarque qu'il y a quelques similitudes dans nos views. Peux-tu m'arranger ça ? (#partials)
- N'oublie pas que le titre de la page change, que le fichier css change aussi et que les liens de la nav aussi bouge.
### 🍞 Étape 15 - Créez un middleware pour afficher une page 404
### 🎮 Étape 16 - Controllers :
- On enlève nos fonctions de nos routes et on en fait des controllers

### 🔥 Le supplément :
Vous n'êtes toujours pas rassasié  ?
- Allez sur ce lien : https://valorant-api.com/v1/weapons
  - Créez un nouveau fichier weapons.json
  - Copiez/collez le contenu de votre page dans votre fichier weapons.json
  - Gardez que le tableau "data"
  - Créez un template html et css
  - Répétez les étapes
- Same chose pour : https://valorant-api.com/v1/buddies
