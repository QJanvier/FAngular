const router = require("express").Router();
const usersRoutes = require("./users");

router.use(usersRoutes);

module.exports = router;


app.get<>('/',  (req, res) => {
  req.session.visited = true
  res.cookie('Pedro', 'express', { maxAge: 6000, signed: true})
  res.status(201).send({msg: 'Hello World!'})
})