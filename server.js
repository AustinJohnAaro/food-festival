var  express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var compression = require("compression");

var PORT = process.env.PORT || 3001;
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/budget-app";

var app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/budget-app', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
}); 
