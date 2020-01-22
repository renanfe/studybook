import { ParamsDictionary } from "express-serve-static-core";
import { Response, Request } from "express";
import Joi from 'joi';
import { UserValidateSchema } from '../model/user.validate.schema';
import path from "path";

export const home = (req: Request<ParamsDictionary>, res: Response): any => res.render('index.html');

export const home2 = (req: Request<ParamsDictionary>, res: Response): any => res.sendFile(path.join(__dirname, '../view', 'index.html'));

export const userCreate = (req: Request<ParamsDictionary>, res: Response): any => {
  Joi.validate(req.body, UserValidateSchema, (err, result) => err ? res.send('err') : res.send('ok'));
  console.log(req.body);
  res.json({ status: 200 });
};