const usersTable = `
	CREATE TABLE IF NOT EXISTS users(
		_id INT(11) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
		username VARCHAR(100) NOT NULL,
		password VARCHAR(150) NOT NULL,
		status INT(1) DEFAULT 0,
		isAdmin INT(1) DEFAULT 0,
		isSuperAdmin INT(1) DEFAULT 0,
		created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
		updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP,
		deleted_at DATETIME DEFAULT NULL,
		CONSTRAINT users_username_unique UNIQUE (username)
	)
`;

exports.Tables = [usersTable];
exports.Relations = [];