const router = require("express").Router();
const usersRoutes = require("./users");
const app = require('../app')
router.use(usersRoutes);

module.exports = router;

export interface BaseRoute {
  path: string;
  component?: any;
  children?: BaseRoute[];
  canActivate?: any[];
  canDeactivate?: any[];
  data?: Record<string, any>;
  redirectTo?: string;
  pathMatch?: string;
}


router.get<>('/',  (req, res) => {
  req.session.visited = true
  res.cookie('Pedro', 'express', { maxAge: 6000, signed: true})
  res.status(201).send({msg: 'Hello World!'})
})