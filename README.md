# Project with React, Redux, Redux Actions, Router, Lazy loading, Hooks
<p>Project setting and implementing simple webpack 4 dev environment, whose goal is to study last versions of webpack plugins, loaders compatibility over time.<p>
<p>There's a set of pages from LePoint newspaper remade with React components and HTML simple integration.<p>

### Scripts

#### Launch project
```
npm start
```
#### Launch webpack dev server
```
npm run server
```
aliases
```
node ./dev-server.js
```
#### Test with jest
```
npm run test
```
aliases
```
jest --watchAll
```
#### Bundling files in dev mode
```
npm run build
```
aliases
```
rimraf dist && webpack
```
#### Launch webpack dev server, watch files modifications
```
npm run dev
```
aliases
```
npm run server && npm run build
```
#### Bundling files in production mode
```
npm run dist
```
aliases
```
NODE_ENV=production npm run build
```
#### Precommit hook to execute linting on staged files only
```
npm run precommit
```
aliases
```
NODE_ENV=production lint-stage
```
#### Validating code according to stylelint rules
```
npm run validate:css
```
aliases
```
npm run lint:css && prettier --list-different ./src/**/*.scss
```
#### Validating code according to eslint rules
```
npm run validate:js
```
aliases
```
npm run npm run lint:js && prettier --list-different ./src/**/*.{js,jsx}
```
#### Linting and correcting JS files with eslint and prettier
```
npm run lint:js
```
aliases
```
npm run eslint-check && npm run format:js && node_modules/.bin/eslint --config ./.eslintrc ./src/js/**/*.jsx
```
#### Linting and correcting JS files with stylelint and prettier
```
npm run lint:css
```
aliases
```
npm run stylelint-check && npm run format:css && node_modules/.bin/stylelint --config ./.stylelintrc ./src/scss/**/*.scss
```
#### Checking conflicts between eslint and prettier rules
```
npm run eslint-check
```
aliases
```
node_modules/.bin/eslint --config ./.eslintrc --print-config . | eslint-config-prettier-check
```
#### Checking conflicts between stylelint and prettier rules
```
npm run stylelint-check
```
aliases
```
stylelint-config-prettier-check
```
#### Correcting JS, JSX files according to eslint configuration rules
```
npm run format:js
```
aliases
```
prettier-eslint --write './src/js/**/*.{js,jsx}'
```
#### Correcting SCSS files according to stylelint configuration rules
```
npm run format:css
```
aliases
```
prettier-stylelint --write './src/scss/**/*.scss,!./src/styles/compass-mixins/**/*.scss
```
