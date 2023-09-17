import express, {Request, Response, NextFunction} from "express";
import { signinSchema} from "../schemas";
import { ExpressError } from "../utils/ExpressError";
import {Customer} from "../models/customer";
const router = express.Router();

const signInValidaton = async (req: Request, res: Response, next: NextFunction) => {
    const {error} = signinSchema.validate(req.body);
    const foundCustomer = await Customer.find({email: req.body.user.email, password: req.body.user.password})
    if(error){
        const msg = error.details.map(el => el.message).join(',');
        throw new ExpressError(msg, 400);
    } else if (!foundCustomer.length){
        const message = `This is not a correct account please try again`
        res.render('signin', {message});
    } else {
        res.locals.foundCustomer = foundCustomer[0];
        next();
    }
}

router.get('/', (req, res) => {
    const message = ''
    res.render('signin', {message});
})

router.post('/',signInValidaton,(req, res) => {
    res.render('home', {name: res.locals.foundCustomer.firstName })
})

export default router;