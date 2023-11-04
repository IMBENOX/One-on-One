import express, {Request, Response, NextFunction,ErrorRequestHandler} from "express";
import {signupSchema} from "./schemas";
import { ExpressError } from "./utils/ExpressError";

declare module 'express-session' { 
    interface SessionData {
      returnTo: string;
    }
  }

export const validateUserDetails = async (req: Request, res: Response, next: NextFunction) => {
    const {error} = signupSchema.validate(req.body);
    if(error){
        const msg = error.details.map(el => el.message).join(',');
        throw new ExpressError(msg, 400);
    } else {
        next();
    }
}

export const isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
    if(!req.isAuthenticated()){ 
        req.session.returnTo = req.originalUrl
        req.flash('error', 'You must be signed in');
        return res.redirect('/signin');
    }
    next();
}

export const storeReturnTo = (req: Request, res: Response, next: NextFunction) => {
    if(req.session.returnTo) {
        res.locals.returnTo = req.session.returnTo;
    }
    next();
}

export const errorHandler: ErrorRequestHandler = (err, req, res , next) => {
    const {statusCode= 500} = err;
    if(!err.message) err.message = 'Somethink Went Wrong!'
    res.status(statusCode).render('error',{err});

}