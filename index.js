var sherdog = require("sherdog");

const express = require("express");
const app = express();
const port = 3000;

app.get("/fighter/:user", (req, res) => {
  var url = `http://www.sherdog.com/fighter/${req.params.user}`;

  sherdog.getFighter(url, function (data) {
    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`ESTOU CONECTADO ${port}`);
});