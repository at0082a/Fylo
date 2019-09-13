const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'))


app.get("/", (req, res) => {
  res.render("registration_page");
});


app.listen(port, function() {
  console.log("Runnning on " + port);
});