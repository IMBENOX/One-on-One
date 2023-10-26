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
    const arr = category.split('-');
    arr.forEach((str,index) => {
        arr[index] = str.charAt(0).toUpperCase() + str.slice(1)
    })
    const correctCategoryName = arr.join(' ');
    const foundCategory = await Category.find({name: correctCategoryName})
    if(foundCategory.length === 0) {
        req.flash('error', `There is not a Category with name ${category}`)
        return res.redirect(`/services`);
    }
    const foundServices = await Service.find({category: correctCategoryName})
    if(foundServices.length === 0) {
        req.flash('error', `There are not services in the Category ${category}`)
        return res.redirect(`/services`);
    }
    res.render('aboutService',{foundServices,foundCategory})
}));

router.get('/:category/:service', isLoggedIn, wrapAsync( async (req, res) => {
    const {service, category} = req.params;
    const foundService = await Service.find({name: service}).populate('providers');
    if(foundService.length === 0) {
        req.flash('error', `There are not providers for  ${service} in ${category} Category`)
        return res.redirect(`/services/${category}`);
    }
    res.render('providers',{service, category, foundService});
}));

export default router;