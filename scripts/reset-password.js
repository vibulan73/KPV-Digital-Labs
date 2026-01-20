const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');

const password = 'Admin@123';
const saltRounds = 10;

bcrypt.hash(password, saltRounds, function (err, hash) {
    if (err) {
        console.error('Error hashing password:', err);
        return;
    }

    const adminData = [
        {
            username: 'admin',
            password: hash
        }
    ];

    const filePath = path.join(__dirname, '../app/data/admin.json');

    fs.writeFileSync(filePath, JSON.stringify(adminData, null, 4));
    console.log('Admin password reset successfully to:', password);
});
