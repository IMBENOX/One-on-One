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
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeReturnTo = exports.isLoggedIn = exports.validateUserDetails = exports.signInValidaton = void 0;
const schemas_1 = require("./schemas");
const ExpressError_1 = require("./utils/ExpressError");
const signInValidaton = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = schemas_1.signinSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',');
        throw new ExpressError_1.ExpressError(msg, 400);
    }
    else {
        next();
    }
});
exports.signInValidaton = signInValidaton;
const validateUserDetails = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = schemas_1.signupSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',');
        throw new ExpressError_1.ExpressError(msg, 400);
    }
    else {
        next();
    }
});
exports.validateUserDetails = validateUserDetails;
const isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) { //This function is provided by Passport.js, and it returns true if the user is authenticated (logged in) and false if they are not.
        req.session.returnTo = req.originalUrl;
        req.flash('error', 'You must be signed in');
        return res.redirect('/signin');
    }
    next();
};
exports.isLoggedIn = isLoggedIn;
const storeReturnTo = (req, res, next) => {
    if (req.session.returnTo) {
        res.locals.returnTo = req.session.returnTo;
    }
    next();
};
exports.storeReturnTo = storeReturnTo;
