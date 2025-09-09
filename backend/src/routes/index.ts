const router = require("express").Router();
const usersRoutes = require("./users");

router.use(usersRoutes);

module.exports = router;