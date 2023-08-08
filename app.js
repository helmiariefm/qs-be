require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000
const cors = require("cors")
const UserRoutes = require("./routes/UserRoutes")

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors());

app.use("/", UserRoutes)

app.listen(port, () => console.log(`QShare Server listening at http://localhost:${port}`))