const transactionsTable = `
	CREATE TABLE IF NOT EXISTS transactions(
		_id INT(11) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
		idUser INT(11) UNSIGNED,
		listProduct VARCHAR(200) DEFAULT NULL,
		totalPrice DECIMAL(15,2) DEFAULT NULL,
		created_at DATETIME DEFAULT CURRENT_TIMESTAMP
	)
`;

const transactionsRelation = `
	ALTER TABLE transactions DROP FOREIGN KEY IF EXISTS transactions_idUser_foreign;
	ALTER TABLE transactions ADD CONSTRAINT transactions_idUser_foreign FOREIGN KEY (idUser) REFERENCES users(_id) ON DELETE SET NULL
`;

exports.Tables = [transactionsTable];
exports.Relations = [transactionsRelation];