const express = require("express")

const config = require('./config/config')

const app = express()
app.use(express.json())

require('./routes')(app)

app.listen(process.env.PORT || config.port, () => {
  console.log(`server running on port: ${config.port}`)
})