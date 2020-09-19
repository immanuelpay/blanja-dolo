const { runQuery } = require("../config/db");

exports.GetParentCategory = (params) => {
	return new Promise((resolve, reject) => {
		if (!params) {
			runQuery(`SELECT * FROM categories WHERE idParent=NULL`, (err, result) => {
				if (err) {
					return reject(new Error(err));
				} else {
					return resolve(result[1][0]);
				}
			});
		} else {
			runQuery(`SELECT * FROM categories WHERE _id=${params}`, (err, result) => {
				if (err) {
					return reject(new Error(err));
				} else {
					return resolve(result[1][0]);
				}
			});
		}
	});
};

exports.CreateCategory = (body) => {
	return new Promise((resolve, reject) => {
		runQuery(`INSERT INTO categories(${Object.keys(body).map().join(",")}) values('${Object.values(body).map().join(",")}')`, (err, result) => {
			if (err) {
				return reject(new Error(err));
			} else {
				return resolve(result);
			}
		});
	});
};