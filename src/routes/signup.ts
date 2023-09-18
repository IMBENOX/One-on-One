import express, {Request, Response, NextFunction} from "express";
import {wrapAsync} from '../utils/catchAsync';
import { ExpressError } from "../utils/ExpressError";
import { signupSchema} from "../schemas";
import {Customer} from "../models/customer";
const router = express.Router();

const validateUserDetails = async (req: Request, res: Response, next: NextFunction) => {
    const {error} = signupSchema.validate(req.body);
    const foundCustomer = await Customer.find({email: req.body.user.email})
    if(error){
        const msg = error.details.map(el => el.message).join(',');
        throw new ExpressError(msg, 400);
    } else if (foundCustomer.length){
        const message = `${foundCustomer[0].email} is in use please use an other email`
        res.render('signup', {message});
    } else {
        next();
    }
}

router.get('/', (req, res) => {
    const message = ''
    res.render('signup', {message})
});

router.post('/',validateUserDetails, wrapAsync( async (req, res) => {
    const newCustomer = new Customer(req.body.user);
    await newCustomer.save()
    req.flash('success', 'Successfully Sign Up!')
    res.redirect('/home');
}));

export default router;