const express = require("express")
const { sequelize } = require('./models')

const config = require('./config/config')

const app = express()
app.use(express.json())

require('./routes')(app)

sequelize.sync({force: false})
.then(() => {
  app.listen(process.env.PORT || config.port, () => {
    console.log(`server running on port: ${config.port}`)
  })
})