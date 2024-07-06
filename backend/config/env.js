
require('dotenv').config();

module.exports = {
  db: {
    name: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  },
  secret: process.env.JWT_SECRET
};

  