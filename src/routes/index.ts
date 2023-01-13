import { Application } from "express";
import Router from 'express';
import { productRouter } from "./produtos";

export const useRoutes = (app: Application) => {
    const apiRouter = Router();
    apiRouter.use('/produtos', productRouter);

    app.use('/api/v1', apiRouter);
}


