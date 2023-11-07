import express from "express";
import {wrapAsync} from '../utils/catchAsync';
import { Service } from "../models/service";
import { Category } from "../models/category";
import { isLoggedIn } from "../middleware";
const router = express.Router();

router.get('/', wrapAsync( async (req, res) => {
    const categories = await Category.find({});
    res.render('services',{categories});
}));

router.get('/:category', wrapAsync( async (req, res) => {
    const {category} = req.params;
    const foundCategory = await Category.find({id: category})
    if(foundCategory.length === 0) {
        req.flash('error', `There is not a Category with name ${category}`)
        return res.redirect(`/services`);
    }
    const foundServices = await Service.find({category: category})
    if(foundServices.length === 0) {
        req.flash('error', `There are not services in the Category ${category}`)
        return res.redirect(`/services`);
    }
    res.render('aboutService',{foundServices,foundCategory})
}));

router.get('/:category/:service', isLoggedIn, wrapAsync( async (req, res) => {
    const {service, category} = req.params;
    const foundService = await Service.find({id: service}).populate('providers');
    if(foundService.length === 0) {
        req.flash('error', `There are not providers for  ${service} in ${category} Category`)
        return res.redirect(`/services/${category}`);
    }
    res.render('providers',{service, category, foundService});
}));

export default router;