var  express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var compression = require("compression");
var path = require('path');

var PORT = process.env.PORT || 3001;
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/taste";

var app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./models/public"));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/taste', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// routes
app.use(require("./models/routes/api.js"));

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, './models/public/index.html'));
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});