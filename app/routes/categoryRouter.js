const categoryRouter = require("express").Router();
const {
	CreateCategory
} = require("../controllers/categoryController");

categoryRouter.post("/", CreateCategory);

module.exports = categoryRouter;