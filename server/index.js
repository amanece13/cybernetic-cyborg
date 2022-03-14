const express = require('express');
const mongoose = require('mongoose')
const os = require('os');
const app = express();
const path = require('path');
// const DBConnect = require('./database');
const paths = require('../config/paths');
// const { readdirSync } = require("fs");
const dotenv = require("dotenv")
const morgan = require("morgan")

app.use(express.static('dist'));

// dotenv.config({ path: './.env' });
app.use(morgan("dev"))

// const DB = process.env.DATABASE_LOCAL;

// mongoose.connect(DB, {
//   useNewUrlParser: true,
// }).then(() => console.log('DB Connection Successful!'))

//Body Parser, reading data from body into req.body 
// app.use(express.json({ limit: '1mb' }));
// app.use(express.urlencoded({
// 	extended: true,
// 	limit: '1mb'
// }));

// routes middleware
// readdirSync("./server/routes").map((r) => app.use("/api", require("./routes/" + r))); //load all routes from routes middleware

// app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.get('*', (req, res) => {
  res.sendFile(paths.build + '/index.html');
});

// DBConnect().catch(console.error);

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));