# api-walkthrough

## description
- This is a server that works with sequelize in order to create, read, update, and delete values on tables in the mysql database.

## details
- The database is built with models including products, tags, and categories. The rules for those models decide what kind of data can be stored and how. A lot of the file structure is organized through centralized chokepoints that direct the imported files to their higher files that direct them. For example the models are collected in an index.js so that they can be required by one export. Each endpoint /products, /tags, and /categories are allowed to create, get all, get by id, update by id, and delete by id. I use insomnia to test those endpoints by supplying json requests to get responses if they are good. I have included a video walkthrough at the bottom of the readme.

## what i learned
- I have learned how to use sequelize to automate sql commands to easily manipulate the database. I learned that using try/ catch statements is a good way to debug your program and avoid bugs in general. Overall request and response objects are made more clear to me. 

## link to video
- https://drive.google.com/file/d/1O8cn8qZtkXWdTBBY3R17KlbZ4b3H7QCg/view
