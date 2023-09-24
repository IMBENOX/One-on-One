import express, {Request, Response, NextFunction} from "express";
import {storeReturnTo, validateUserDetails } from "../middleware";
import {Customer} from "../models/customer";
import { ExpressError } from "../utils/ExpressError";
import {wrapAsync} from '../utils/catchAsync';
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const passport = require('passport');


router.get('/signup', (req, res) => {
    res.render('signup')
});

router.post('/signup',validateUserDetails, wrapAsync( async (req, res, next) => {
    try{
        const { user} = req.body;
        user.username = user.firstName;
        const customer = new Customer(user);
        const signupCustomer = await Customer.register(customer, user.password); //This code is calling a registration function or method on the Customer model. The purpose of this function is to create a new user account in your application's database.
        req.login(signupCustomer, err => {
            if(err) return next(err);
            req.flash('success', 'Successfully Sign Up!')
            res.redirect('/home');
            });
    } catch(e) {
        if(e instanceof Error){
            console.log();
            if(e.message.includes('11000')) {
                req.flash('error', 'Email address is already in use');
            } else {
                req.flash('error', e.message);
            }
            res.redirect('signup');
        }
    }
}));


router.get('/signin', (req, res) => {
    res.render('signin');
})

router.post('/signin', storeReturnTo, passport.authenticate('local', {failureFlash: true, failureRedirect: '/signin' }), (req, res) => {
    req.flash('success', 'Successfully Sign In!')
    const redirectUrl = res.locals.returnTo || '/home';
    delete req.session.returnTo; //This line of code deletes the returnTo property from the session object. After this line is executed, req.session.returnTo will be undefined or no longer exist in the session.
    res.redirect(redirectUrl)
})

router.get('/logout', (req, res, next) => {
    req.logout(function (err) {
        if(err) {
            return next(err);
        }
        req.flash('success', "Goodbye!!!");
        res.redirect('/home');
    });
});




export default router;