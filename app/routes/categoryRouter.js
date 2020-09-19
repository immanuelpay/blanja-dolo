const categoryRouter = require("express").Router();
const {
	GetAllCategory,
	CreateCategory,
	GetDetailCategory,
	UpdateCategory,
	DeleteCategory,
	TrashCategory,
	DeletePermanentCategory
} = require("../controllers/categoryController");

categoryRouter.GET("/", GetAllCategory);
categoryRouter.POST("/create", CreateCategory);
categoryRouter.GET("/:id", GetDetailCategory);
categoryRouter.PATCH("/:id", UpdateCategory);
categoryRouter.POST("/:id/delete", DeleteCategory);
categoryRouter.GET("/trash-category", TrashCategory);
categoryRouter.DELETE("/:id/delete-permanent", DeletePermanentCategory);

module.exports = categoryRouter;