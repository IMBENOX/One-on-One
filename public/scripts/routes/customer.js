"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middleware_1 = require("../middleware");
const customer_1 = require("../models/customer");
const catchAsync_1 = require("../utils/catchAsync");
const router = express_1.default.Router();
const passport = require('passport');
router.get('/signup', (req, res) => {
    res.render('signup');
});
router.post('/signup', middleware_1.validateUserDetails, (0, catchAsync_1.wrapAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user } = req.body;
        user.username = user.firstName;
        const customer = new customer_1.Customer(user);
        customer.password = '1234';
        const signupCustomer = yield customer_1.Customer.register(customer, user.password);
        req.login(signupCustomer, err => {
            if (err)
                return next(err);
            req.flash('success', 'Successfully Sign Up!');
            res.redirect('/home');
        });
    }
    catch (e) {
        if (e instanceof Error) {
            if (e.message.includes('11000')) {
                req.flash('error', 'Email address is already in use');
            }
            else {
                req.flash('error', e.message);
            }
            res.redirect('signup');
        }
    }
})));
router.get('/signin', (req, res) => {
    res.render('signin');
});
router.post('/signin', middleware_1.storeReturnTo, passport.authenticate('local', { failureFlash: true, failureRedirect: '/signin' }), (req, res) => {
    req.flash('success', 'Successfully Sign In!');
    const redirectUrl = res.locals.returnTo || '/home';
    delete req.session.returnTo;
    res.redirect(redirectUrl);
});
router.get('/logout', (req, res, next) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        req.flash('success', "Goodbye!!!");
        res.redirect('/home');
    });
});
exports.default = router;
