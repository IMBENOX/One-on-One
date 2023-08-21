import mongoose from "mongoose";
import {Provider} from "../models/provider";
import { arrayNames } from "./array-names";
import { seedServices } from "./services";


mongoose.connect('mongodb://127.0.0.1:27017/OneOnOneDb')
    .then(() => {
        console.log("Database Connected")
    })
    .catch(err => {
        console.log("Conection error")
        console.log(err)
    })

export const insertProviders = async () => {
    await Provider.deleteMany({});
    for(let i = 0; i < 100; i++) {
        const randomName1 = Math.floor(Math.random() * 1000);
        const randomName2 = Math.floor(Math.random() * 1000);
        const randomService = Math.floor(Math.random() * seedServices.length)
        const provider = new Provider({
            firstName: `${arrayNames[randomName1]}`,
            lastName: `${arrayNames[randomName2]}`,
            service : `${seedServices[randomService].name}`
        });
        await provider.save()
        .then(res => {
            // console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    }
}

// insertProviders();