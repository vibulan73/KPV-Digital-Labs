const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');

async function setupAdmin() {
    const password = 'Admin@123';
    const hashedPassword = await bcrypt.hash(password, 10);

    const adminData = [
        {
            username: 'admin',
            password: hashedPassword
        }
    ];

    const filePath = path.join(__dirname, 'app', 'data', 'admin.json');
    fs.writeFileSync(filePath, JSON.stringify(adminData, null, 2));

    console.log('Admin user created successfully!');
    console.log('Username: admin');
    console.log('Password: Admin@123');
}

setupAdmin();
