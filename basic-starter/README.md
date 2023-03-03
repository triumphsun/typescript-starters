
```bash
# NVM
nvm use 16.18.1
vim .nvmrc

# NPM
npm init
vim .npmrc

# Typescript
npm install --save-dev typescript
npx tsc --init   # It will create the file /tsconfig.json

# Jest
npm install --save-dev jest ts-jest @types/jest
npx ts-jest config:init   # It will create the file /jest.config.js

# Linter
npm install --save-dev eslint
npx eslint --init  # It will create the file /.eslintrc.js
vim .eslintignore

# Formatter
npm install --save-dev prettier
vim .prettierrc
vim .prettierignore

# Git hooks
npm install --save-dev lint-staged
```