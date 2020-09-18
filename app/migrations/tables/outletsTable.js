const outletsTable = `
	CREATE TABLE IF NOT EXISTS outlets(
		_id INT(11) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
		idUser INT(11) UNSIGNED,
		name VARCHAR(100) NOT NULL,
		logo VARCHAR(150) DEFAULT NULL,
		location VARCHAR(150) DEFAULT NULL,
		description TEXT DEFAULT NULL,
		created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
		updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP,
		deleted_at DATETIME DEFAULT NULL
	)
`;

const outletsRelation = `
	ALTER TABLE outlets DROP FOREIGN KEY IF EXISTS outlets_idUser_foreign;
	ALTER TABLE outlets ADD CONSTRAINT outlets_idUser_foreign FOREIGN KEY (idUser) REFERENCES users(_id) ON DELETE SET NULL
`;

exports.Tables = [outletsTable];
exports.Relations = [outletsRelation];