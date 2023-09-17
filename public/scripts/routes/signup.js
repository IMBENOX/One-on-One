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
const catchAsync_1 = require("../utils/catchAsync");
const ExpressError_1 = require("../utils/ExpressError");
const schemas_1 = require("../schemas");
const customer_1 = require("../models/customer");
const router = express_1.default.Router();
const validateUserDetails = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = schemas_1.signupSchema.validate(req.body);
    const foundCustomer = yield customer_1.Customer.find({ email: req.body.user.email });
    if (error) {
        const msg = error.details.map(el => el.message).join(',');
        throw new ExpressError_1.ExpressError(msg, 400);
    }
    else if (foundCustomer.length) {
        const message = `${foundCustomer[0].email} is in use please use an other email`;
        res.render('signup', { message });
    }
    else {
        next();
    }
});
router.get('/signup', (req, res) => {
    const message = '';
    res.render('signup', { message });
});
router.post('/signup', validateUserDetails, (0, catchAsync_1.wrapAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newCustomer = new customer_1.Customer(req.body.user);
    yield newCustomer.save()
        .then(() => {
        res.redirect('/home');
    })
        .catch((e) => {
        res.render(e);
    });
})));
exports.default = router;
