const slug = require("slug");
const {
    CreateCategory
} = require("../models/categoryModel");

exports.CreateCategory = async (req, res, next) => {
    try {
        if (!req.body.name) {
        	throw new Error("Please add a data.");
        }

        let params = {
            name: req.body.name,
            slug: slug(name),
            status: req.body.status,
            idParent: req.body.idParent,
        };

        const resultQuery = await CreateCategory(params);
        if (resultQuery) {
            res.status(200).send({
                data: {
                    id: resultQuery[1].insertId,
                    name: params.name,
                    slug: params.slug,
                    status: (params.status == 0) ? "INACTIVE" : "ACTIVE",
                },
            });
        } else {
            throw new Error("Create Failed.");
        }
    } catch (error) {
        console.log(error);
        res.status(202).send({
            error: {
                msg: error.message || "Something Wrong.",
            },
        });
    }
};