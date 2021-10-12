module.exports = {
  development: {
    username: process.env.DB_USER ?? 'postgres',
    password: process.env.DB_PASSWORD ?? 'admin',
    database: 'phones_db_hw',
    host: process.env.DB_HOST ?? 'localhost',
    port: 5432,
    dialect: 'postgres',
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
