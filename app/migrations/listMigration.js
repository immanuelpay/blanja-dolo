const users = require("./tables/usersTable"),
	userProfile = require("./tables/userProfileTable"),
	categories = require("./tables/categoriesTable"),
	outlets = require("./tables/outletsTable"),
	products = require("./tables/productsTable"),
	productReview = require("./tables/productReviewTable"),
	carts = require("./tables/cartsTable"),
	transactions = require("./tables/transactionsTable");

module.exports = {
    tables: [
    	...users.Tables,
    	...userProfile.Tables,
    	...categories.Tables,
    	...outlets.Tables,
    	...products.Tables,
    	...productReview.Tables,
    	...carts.Tables,
    	...transactions.Tables
    ],

    relation: [
    	...users.Relations,
    	...userProfile.Relations,
    	...categories.Relations,
    	...outlets.Relations,
    	...products.Relations,
    	...productReview.Relations,
    	...carts.Relations,
    	...transactions.Relations
    ],
};