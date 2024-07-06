// seeders/userSeeder.js

const bcrypt = require('bcrypt');
const User = require('../models/user');

async function seedUsers() {
  try {
    const hashedPassword = await bcrypt.hash('password123', 10);
    await User.create({
      email: 'test@example.com',
      password: hashedPassword,
    });
    console.log('User seeded!');
  } catch (error) {
    console.error('Error seeding user:', error);
  }
}

seedUsers();
