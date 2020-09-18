require('dotenv').config();
const { dbConnection } = require("../config/db"),
	{ tables, relation } = require("./listMigration"),
    dataBase = process.env.DB_DATABASE;

dbConnection.query(`
	CREATE DATABASE IF NOT EXISTS ${dataBase}; USE ${dataBase}; ${tables.join(";")};`,
    (err, result) => {
        if (!err) {
            console.log(`Database ${dataBase} successfuly created.`);
            dbConnection.query(`USE ${dataBase}; SHOW TABLES; ${relation.join(";")}`,
                (err, result) => {
                    if (!err) {
                    	console.log(result[1]);
                        console.log("\nMigration Success!");
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