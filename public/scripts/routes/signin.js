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
const schemas_1 = require("../schemas");
const ExpressError_1 = require("../utils/ExpressError");
const customer_1 = require("../models/customer");
const router = express_1.default.Router();
const signInValidaton = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = schemas_1.signinSchema.validate(req.body);
    const foundCustomer = yield customer_1.Customer.find({ email: req.body.user.email, password: req.body.user.password });
    if (error) {
        const msg = error.details.map(el => el.message).join(',');
        throw new ExpressError_1.ExpressError(msg, 400);
    }
    else if (!foundCustomer.length) {
        const message = `This is not a correct account please try again`;
        res.render('signin', { message });
    }
    else {
        res.locals.foundCustomer = foundCustomer[0];
        next();
    }
});
router.get('/', (req, res) => {
    const message = '';
    res.render('signin', { message });
});
router.post('/', signInValidaton, (req, res) => {
    req.flash('success', 'Successfully Sign In!');
    res.redirect('home');
});
exports.default = router;
