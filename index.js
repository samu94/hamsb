const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ id: "He hecho cambios :)" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
