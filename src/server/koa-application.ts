import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as Parser from 'koa-bodyparser';

export const KoaApplication = new Koa();
export const KoaRouter = new Router();
export const KoaBodyParser = Parser();
