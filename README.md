\# TP ESLint - Qualité du Code JavaScript



\## 📋 Description



Ce projet démontre l'utilisation d'ESLint pour maintenir la qualité du code JavaScript. Il inclut des hooks Git avec Husky et une vérification automatique via GitHub Actions.



\## 🛠️ Technologies utilisées



\- \*\*Node.js\*\* - Environnement d'exécution JavaScript

\- \*\*ESLint\*\* - Linter pour analyser et corriger le code

\- \*\*Husky\*\* - Hooks Git pour exécuter ESLint avant chaque commit

\- \*\*GitHub Actions\*\* - CI/CD pour vérifier le code automatiquement



\## 📦 Installation

```bash

\# Cloner le dépôt

git clone https://github.com/chaymaetaj407-glitch/tp-eslint-git.git



\# Installer les dépendances

npm install

```



\## ✅ Commandes disponibles

```bash

\# Vérifier le code avec ESLint

npm run lint



\# Corriger automatiquement les erreurs

npm run lint:fix



\# Vérifier un fichier spécifique

npx eslint index.js

```



\## 🔧 Configuration ESLint



Le projet utilise les règles suivantes :

\- Indentation : 2 espaces

\- Guillemets : simples

\- Points-virgules : obligatoires

\- Égalité stricte : `===` au lieu de `==`

\- Pas de `console.log` en production (warning)

\- Pas de variables non utilisées



\## 🐕 Husky Pre-commit Hook



Avant chaque commit, ESLint vérifie automatiquement le code. Si des erreurs sont détectées, le commit est bloqué.



\## 🚀 GitHub Actions



À chaque push, GitHub Actions exécute automatiquement ESLint pour garantir la qualité du code.



\## 👤 Auteur



Projet réalisé dans le cadre d'un TP.



\## 📅 Date



Février 2026

