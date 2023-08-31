import mongoose from "mongoose";
import { arrayNames } from "./array-names";
import { seedServices } from "./services";
import { Service, Provider} from "../models/service";


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
        const provider = new Provider({
            firstName: `${arrayNames[randomName1]}`,
            lastName: `${arrayNames[randomName2]}`,
            service : `${seedServices[randomService].name}`,
            info    :  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat quis architecto ut iure aspernatur voluptatum odit. Fugit repudiandae laboriosam possimus veniam fuga eaque laborum sed, facere ullam. Nostrum, iusto eveniet?'
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
