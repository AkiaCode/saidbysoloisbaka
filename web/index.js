const express = require('express')
const path = require('path')
const app = express()

app.use('/static', express.static(path.join(__dirname, 'static')))

app.listen(3000, () => console.log("3000"))