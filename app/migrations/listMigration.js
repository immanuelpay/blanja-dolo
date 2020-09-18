const users = require("./tables/usersTable");
// const userProfile = require("");
// const categoryItem = require("");
// const items = require("");
// const itemReview = require("");
// const restaurants = require("");
// const carts = require("");
// const transactions = require("");

module.exports = {
    tables: [...users.Tables],
    relation: [...users.Relations],
};