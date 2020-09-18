const userProfileTable = `
	CREATE TABLE IF NOT EXISTS userProfile(
		_id INT(11) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
		idUser INT(11) UNSIGNED,
		fullname VARCHAR(150) DEFAULT NULL,
		email VARCHAR(150) DEFAULT NULL,
		emailVerifiedAt DATETIME DEFAULT NULL,
		codeVerify VARCHAR(150) DEFAULT NULL,
		balance VARCHAR(150) DEFAULT NULL,
		gender ENUM('L', 'P') DEFAULT NULL,
		image VARCHAR(150) DEFAULT NULL,
		address TEXT DEFAULT NULL,
		created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
		updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP,
		CONSTRAINT usersProfile_email_unique UNIQUE (email)
	)
`;

const userProfileRelation = `
	ALTER TABLE userProfile DROP FOREIGN KEY IF EXISTS usersProfile_idUser_foreign;
	ALTER TABLE userProfile ADD CONSTRAINT usersProfile_idUser_foreign FOREIGN KEY (idUser) REFERENCES users(_id) ON DELETE CASADE
`;

exports.Tables = [userProfileTable];
exports.Relations = [userProfileRelation];