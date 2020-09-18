const cartsTable = `
	CREATE TABLE IF NOT EXISTS carts(
		_id INT(11) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
		idUser INT(11) UNSIGNED,
		idProduct INT(11) UNSIGNED,
		nameProduct VARCHAR(200) NOT NULL,
		totalPrice DECIMAL(15,2) DEFAULT NULL,
		totalProduct INT(11) DEFAULT NULL,
		isCheckOut INT(1) DEFAULT 0,
		created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
		updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP,
		deleted_at DATETIME DEFAULT NULL
	)
`;

const cartsRelation = `
	ALTER TABLE carts DROP FOREIGN KEY IF EXISTS carts_idUser_foreign;
	ALTER TABLE carts DROP FOREIGN KEY IF EXISTS carts_idProduct_foreign;
	ALTER TABLE carts ADD CONSTRAINT carts_idUser_foreign FOREIGN KEY (idUser) REFERENCES users(_id) ON DELETE SET NULL;
	ALTER TABLE carts ADD CONSTRAINT carts_idProduct_foreign FOREIGN KEY (idProduct) REFERENCES products(_id) ON DELETE SET NULL
`;

exports.Tables = [cartsTable];
exports.Relations = [cartsRelation];