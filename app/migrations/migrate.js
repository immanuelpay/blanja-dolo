require('dotenv').config();
const { dbConnection } = require("../config/db"),
	{ tables, relation } = require("./listMigration"),
	dataBase = process.env.DB_DATABASE;

dbConnection.query(`
	CREATE DATABASE IF NOT EXISTS ${dataBase}; USE ${dataBase}; ${tables.join(";")};`,
	(err, result) => {
		if (!err) {
			console.log(`USE ${dataBase}; ${relation.join(";")}`);
			dbConnection.query(`USE ${dataBase}; ${relation.join(";")}`,
				(err, result) => {
					if (!err) {
						console.log("Migration Success!")
					} else {
						console.log("Migration Failed!");
						console.log(err);
					}

					dbConnection.end();
				}
			);
		} else {
			console.log("Migration Failed!");
			console.log(err);
		}	
	}
);