const express = require('express')
require('dotenv').config()
const taskRoute = require('./routes/taskRoute')
const db = require('./config/db')
const cors = require("cors");


const app = express()
const port = process.env.PORT || 7000

app.use(cors({
  origin: "http://localhost:5173",  // frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));


app.listen(7001, () => {
  console.log("Server running on port 7001");
});
app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/task', taskRoute)


app.listen(port, () => console.log(`server listening on port ${port}!`))


// http://localhost:7001/task/getAllTasks