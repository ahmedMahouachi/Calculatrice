# Projet Calculatrice Node.js

Ce projet est une **calculatrice simple** en Node.js avec API REST et interface web.
Il permet de s’entraîner à la création de routes, aux tests d’intégration et aux tests end-to-end avec Cypress, puis à l’intégration dans une pipeline CI/CD.

---

## Installation et lancement du serveur

1. Cloner le projet :

   git clone [https://github.com/ahmedMahouachi/Calculatrice](https://github.com/ahmedMahouachi/Calculatrice)

   cd [Calculatrice](https://github.com/ahmedMahouachi/Calculatrice)

2. Installer les dépendances :

   npm install

3. Lancer le serveur en mode développement :

   npm run dev

Le serveur écoute sur `http://localhost:3000`.

---

## Exercices Postman

### Objectif

Créer une **collection Postman automatisée** pour tester toutes les routes du contrôleur de la calculatrice.

### Étapes

1. Créer une collection `Calculatrice`.

2. Ajouter les requêtes pour chaque opération :

   - POST `/api/calc/add`
   - POST `/api/calc/sub`
   - POST `/api/calc/mul`
   - POST `/api/calc/div`

3. Pour chaque requête, ajouter un **body JSON** exemple :

   {
   "a": 5,
   "b": 3
   }

4. Ajouter des tests Postman simples pour vérifier :

   - Le code HTTP (200 pour succès, 400 pour erreur)
   - La valeur du résultat (`res.body.result`)

5. Exécuter la collection en mode automatique avec newman 

## Tests d’intégration

### Objectif

Écrire des **tests d’intégration** pour chaque route de ton contrôleur de calculatrice avec Jest.

### Exercices

1. Créer un fichier `test/integration.test.js`.

2. Importer le serveur et supertest :

   const request = require('supertest');
   const app = require('../server');

3. Écrire des `describe` pour chaque route (`add`, `sub`, `mul`, `div`) avec les cas suivants :

   - Nombres valides
   - Nombre manquant
   - Division par zéro (pour `/div`)
   - Valeur invalide (texte à la place d’un nombre)

4. Exécuter les tests :

   npm test

---

## Exercices Cypress (tests end-to-end)

### Objectif

Tester l’interface web de la calculatrice.

###

---

### Résultat attendu

- Le serveur Node.js fonctionne sur `http://localhost:3000`.
- Les tests Postman vérifient toutes les routes de la calculatrice.
- Les tests Jest vérifient le backend.
- Les tests Cypress vérifient le frontend.
- GitHub Actions exécute automatiquement tous les tests et arrête le serveur correctement.



