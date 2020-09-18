const users = require("./tables/usersTable"),
	userProfile = require("./tables/userProfileTable");
// const categoryItem = require("");
// const items = require("");
// const itemReview = require("");
// const restaurants = require("");
// const carts = require("");
// const transactions = require("");

module.exports = {
    tables: [...users.Tables, ...userProfile.Tables],
    relation: [...users.Relations, ...userProfile.Relations],
};