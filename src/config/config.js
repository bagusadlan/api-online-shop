module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'kelas.com-toko-online',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    options: {
      host: process.env.HOST || 'localhost',
      dialect: process.env.DIALECT || 'mysql',
      
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    },
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}