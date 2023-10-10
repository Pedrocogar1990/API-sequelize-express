const router = require("express").Router();

router.get("/products", (req, res) => {
  res.send("i am a router");
});


module.exports = router;
