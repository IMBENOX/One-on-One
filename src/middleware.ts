import express, {Request, Response, NextFunction} from "express";
import { signinSchema, signupSchema} from "./schemas";
import { ExpressError } from "./utils/ExpressError";

declare module 'express-session' { // Define a custom type declaration for the session object
    interface SessionData {
      returnTo: string;
    }
  }

//  export const signInValidaton = async (req: Request, res: Response, next: NextFunction) => {
//     const {error} = signinSchema.validate(req.body);
//     if(error){
//         const msg = error.details.map(el => el.message).join(',');
//         throw new ExpressError(msg, 400);
//     } else {
//         next();
//     }
// }

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
    if(!req.isAuthenticated()){ //This function is provided by Passport.js, and it returns true if the user is authenticated (logged in) and false if they are not.
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