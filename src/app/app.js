//todo lo que tiene que ver con el servidor o nucleo de nuestra app de express
const express = require("express");
const morgan = require("morgan"); //indicara los encabezados o respuestas http

const router = require("../router/product.router");

const app = express();
//use de morgan leeran todas las peticiones http que se mandan a las rutas se debe de colocar lo primero po eso
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("this is Express");
});
app.use(express.json());//midleware para leer los cuerpo de peticiones http
app.use("/api/v1", router);

module.exports = app;

// min 20:29 https://www.youtube.com/watch?v=3wzMVj7nxtI
