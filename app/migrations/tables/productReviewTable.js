const productReviewTable = `
	CREATE TABLE IF NOT EXISTS product_review(
		_id INT(11) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
		idUser INT(11) UNSIGNED,
		idProduct INT(11) UNSIGNED,
		rating DECIMAL(3,2) DEFAULT NULL,
		review TEXT DEFAULT NULL,
		created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
		updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP,
		deleted_at DATETIME DEFAULT NULL
	)
`;

const productReviewRelation = `
	ALTER TABLE product_review DROP FOREIGN KEY IF EXISTS productReview_idUser_foreign;
	ALTER TABLE product_review DROP FOREIGN KEY IF EXISTS productReview_idProduct_foreign;
	ALTER TABLE product_review ADD CONSTRAINT productReview_idUser_foreign FOREIGN KEY (idUser) REFERENCES users(_id) ON DELETE SET NULL;
	ALTER TABLE product_review ADD CONSTRAINT productReview_idProduct_foreign FOREIGN KEY (idProduct) REFERENCES products(_id) ON DELETE SET NULL
`;

exports.Tables = [productReviewTable];
exports.Relations = [productReviewRelation];