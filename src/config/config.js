module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'toko-online',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    options: {
      host: process.env.HOST || 'localhost',
      dialect: process.env.DIALECT || 'mysql'
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}