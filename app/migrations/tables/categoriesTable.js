const categoriesItemTable = `
	CREATE TABLE IF NOT EXISTS categories(
		_id INT(11) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
		name VARCHAR(100) NOT NULL,
		slug VARCHAR(150) NOT NULL,
		status INT(1) DEFAULT 0,
		idParent INT(11) UNSIGNED DEFAULT NULL,
		created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
		updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP,
		deleted_at DATETIME DEFAULT NULL,
		CONSTRAINT categories_slug_unique UNIQUE (slug)
	)
`;

exports.Tables = [categoriesItemTable];
exports.Relations = [];