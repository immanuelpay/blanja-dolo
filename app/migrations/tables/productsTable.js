const productsTable = `
	CREATE TABLE IF NOT EXISTS products(
		_id INT(11) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
		idOutlet INT(11) UNSIGNED,
		idCategory INT(11) UNSIGNED,
		name VARCHAR(100) NOT NULL,
		slug VARCHAR(150) DEFAULT NULL,
		price DECIMAL(10,2) DEFAULT NULL,
		quantity INT(11) DEFAULT NULL,
		images VARCHAR(150) DEFAULT NULL,
		description TEXT DEFAULT NULL,
		created_by VARCHAR(150) DEFAULT NULL,
		created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
		updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP,
		deleted_at DATETIME DEFAULT NULL
	)
`;

const productsRelation = `
	ALTER TABLE products DROP FOREIGN KEY IF EXISTS products_idCategory_foreign;
	ALTER TABLE products DROP FOREIGN KEY IF EXISTS products_idOutlet_foreign;
	ALTER TABLE products ADD CONSTRAINT products_idCategory_foreign FOREIGN KEY (idCategory) REFERENCES categories(_id) ON DELETE SET NULL;
	ALTER TABLE products ADD CONSTRAINT products_idOutlet_foreign FOREIGN KEY (idOutlet) REFERENCES outlets(_id) ON DELETE SET NULL
`;

exports.Tables = [productsTable];
exports.Relations = [productsRelation];