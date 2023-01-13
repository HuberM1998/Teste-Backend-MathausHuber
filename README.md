# Teste-Backend

<div display="inline">
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge">
<img src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white">
</div>

```sh
# Install dependencies
npm install
or
yarn 

# Run 
npm run dev
or
yarn dev
```

Server initialized in port 3000

All routes prefixed with /api/v1



| HTTP Verb |              Route              | Parameters                                             | Archive      | Description                                          |
| --------- | :----------------------------: | ------------------------------------------------------- | ------------ | -------------------------------------------------- |
| GET       |            /produtos           |                                                         | produtos.ts     | List all products                         |
| GET       |            /produtos/{id}      | id of product                                           | produtos.ts     | List a specific product                     |
| POST      |            /produtos           | all product parameters                                  | produtos.ts     | Add a product            |
| PUT       |            /produtos/{id}      | all product parameters more id                          | produtos.ts     | Update a product                                     |
| DELETE    |            /produtos/{id}      | id                                                      | produtos.ts     | Delete a product                  |
