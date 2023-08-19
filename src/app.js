const express = require("express")

const app = express()
const port = 8081

require('./routes')(app)

app.listen(port, () => {
  console.log(`server running on port: ${port}`)
})