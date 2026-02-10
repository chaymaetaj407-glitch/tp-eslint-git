\# TP ESLint - Qualité du Code JavaScript



\## 📋 Description



Ce projet démontre l'utilisation d'ESLint pour maintenir la qualité du code JavaScript. Il inclut des hooks Git avec Husky et une vérification automatique via GitHub Actions.



\## 🛠️ Technologies utilisées



\- \*\*Node.js\*\* - Environnement d'exécution JavaScript

\- \*\*ESLint\*\* - Linter pour analyser et corriger le code

\- \*\*Husky\*\* - Hooks Git pour exécuter ESLint avant chaque commit

\- \*\*GitHub Actions\*\* - CI/CD pour vérifier le code automatiquement



\##  Installation

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



\##  Configuration ESLint



Le projet utilise les règles suivantes :

\- Indentation : 2 espaces

\- Guillemets : simples

\- Points-virgules : obligatoires

\- Égalité stricte : `===` au lieu de `==`

\- Pas de `console.log` en production (warning)

\- Pas de variables non utilisées
##  Résultats ESLint

### ❌ Avant correction

Le fichier `index.js` contenait **59 problèmes** :
- 50 erreurs
- 9 warnings
```
C:\Users\Reconfiguration\tp-eslint-git\index.js
   2:1   error    Expected indentation of 2 spaces but found 0    indent
   2:15  error    Missing semicolon                               semi
   3:1   error    Expected indentation of 2 spaces but found 0    indent
   3:1   warning  Unexpected console statement                    no-console
   7:7   error    'unusedVar' is assigned a value but never used  no-unused-vars
  10:9   error    Expected '===' and instead saw '=='             eqeqeq
  19:7   error    'message' is assigned a value but never used    no-unused-vars
  21:5   error    Unexpected constant condition                   no-constant-condition
  25:7   error    'tableau' is assigned a value but never used    no-unused-vars
  36:10  error    'toutFaire' is defined but never used           no-unused-vars
  56:7   error    'd' is assigned a value but never used          no-unused-vars
  58:10  error    'fetchData' is defined but never used           no-unused-vars
  63:7   error    'nombres' is assigned a value but never used    no-unused-vars
  67:1   error    Unexpected 'debugger' statement                 no-debugger
  
✖ 59 problems (50 errors, 9 warnings)
39 errors and 0 warnings potentially fixable with the `--fix` option.
```

### ✅ Après correction automatique (`--fix`)
```bash
npx eslint index.js --fix
```

**Résultat : 39 erreurs corrigées automatiquement**

### ✅ Après correction manuelle
```
C:\Users\Reconfiguration\tp-eslint-git\index.js
   3:3  warning  Unexpected console statement  no-console
   9:5  warning  Unexpected console statement  no-console
  15:1  warning  Unexpected console statement  no-console
  19:3  warning  Unexpected console statement  no-console
  23:3  warning  Unexpected console statement  no-console

✖ 5 problems (0 errors, 5 warnings)
```

**✅ 0 erreur - 5 warnings (console.log acceptables)**

### 📝 Corrections effectuées

**Automatiques (via `--fix`) :**
- ✅ Ajout des points-virgules manquants (39 corrections)
- ✅ Correction de l'indentation (2 espaces)
- ✅ Remplacement des guillemets doubles par simples

**Manuelles :**
- ✅ Suppression des variables non utilisées (`unusedVar`, `message`, `tableau`, `d`, `nombres`)
- ✅ Suppression des fonctions non utilisées (`toutFaire`, `fetchData`)
- ✅ Remplacement de `==` par `===` (égalité stricte)
- ✅ Suppression du code mort (`if (false)`)
- ✅ Suppression du `debugger`


\##  Husky Pre-commit Hook



Avant chaque commit, ESLint vérifie automatiquement le code. Si des erreurs sont détectées, le commit est bloqué.



\##  GitHub Actions



À chaque push, GitHub Actions exécute automatiquement ESLint pour garantir la qualité du code.



\##  Auteur



Projet réalisé dans le cadre d'un TP.



\##  Date



Février 2026

