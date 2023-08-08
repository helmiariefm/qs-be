# qs-be

Stack: Expressjs, PostgreSQL, SequelizeORM

### Get Started
 - Install Dependencies `npm i`
 - Configure the Database
	 -  make sure the database username and password in the **config > config.json** match your local database.
	 - `npx sequelize db:create`
	 - `npx sequelize db:migrate`
	 - `npx sequelize db:seed:all`
 - Run the Application `npm start` or `nodemon app.js`