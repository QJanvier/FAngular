const router = require("express").Router();
const express, { Request, Response } = require("express");
const session = require("express-session");
const usersRoutes = require("./users");
app.use(express.json())
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

// Extend Request type to include session property
interface SessionRequest extends Request {
  session: any;
}

router.get('/', (req: SessionRequest, res: Response) => {
  req.session.visited = true;
  res.cookie('Pedro', 'express', { maxAge: 6000, signed: true });
  res.status(201).send({ msg: 'Hello World!' });
});