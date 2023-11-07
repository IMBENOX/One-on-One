import mongoose from "mongoose";
import { arrayNames } from "./array-names";
import { arrayImages } from "./array-images";
import { seedServices } from "./services";
import { Service, Provider} from "../models/service";
import { faker } from '@faker-js/faker';

mongoose.connect('mongodb://127.0.0.1:27017/OneOnOneDb')
    .then(() => {
        console.log("Database Connected")
    })
    .catch(err => {
        console.log("Conection error")
        console.log(err)
    })

export const insertProvidersServices = async () => {
    await Provider.deleteMany({});
    await Service.deleteMany({});
    for(let i = 0; i < 100; i++) {
        const randomName1 = Math.floor(Math.random() * 1000);
        const randomName2 = Math.floor(Math.random() * 1000);
        const randomService = Math.floor(Math.random() * seedServices.length)
        const randomImage   = Math.floor(Math.random() * arrayImages.length)
        const provider = new Provider({
            firstName: `${arrayNames[randomName1]}`,
            lastName: `${arrayNames[randomName2]}`,
            service : `${seedServices[randomService].name}`,
            info    :  `Address: <br>
                        Street: ${faker.location.streetAddress()}<br>
                        City: ${faker.location.city()}<br>
                        State: ${faker.location.state()}<br>
                        ZipCode: ${faker.location.zipCode()}<br>
                        Email: ${faker.internet.email()}<br><br>
                        About:  ${faker.lorem.sentences(3)}`
                        ,
            imageLocation: `${arrayImages[randomImage]}`,
        });
        seedServices[randomService].providers.push(provider)
        await provider.save()
        .then(res => {
            // console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    }
    console.log(seedServices)
    await Service.insertMany(seedServices)
    .then(res => {
        // console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
}
