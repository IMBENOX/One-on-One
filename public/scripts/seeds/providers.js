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
exports.insertProvidersServices = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const array_names_1 = require("./array-names");
const array_images_1 = require("./array-images");
const services_1 = require("./services");
const service_1 = require("../models/service");
const faker_1 = require("@faker-js/faker");
mongoose_1.default.connect('mongodb://127.0.0.1:27017/OneOnOneDb')
    .then(() => {
    console.log("Database Connected");
})
    .catch(err => {
    console.log("Conection error");
    console.log(err);
});
const insertProvidersServices = () => __awaiter(void 0, void 0, void 0, function* () {
    yield service_1.Provider.deleteMany({});
    yield service_1.Service.deleteMany({});
    for (let i = 0; i < 100; i++) {
        const randomName1 = Math.floor(Math.random() * 1000);
        const randomName2 = Math.floor(Math.random() * 1000);
        const randomService = Math.floor(Math.random() * services_1.seedServices.length);
        const randomImage = Math.floor(Math.random() * array_images_1.arrayImages.length);
        const provider = new service_1.Provider({
            firstName: `${array_names_1.arrayNames[randomName1]}`,
            lastName: `${array_names_1.arrayNames[randomName2]}`,
            service: `${services_1.seedServices[randomService].name}`,
            info: `Address: <br>
                        Street: ${faker_1.faker.location.streetAddress()}<br>
                        City: ${faker_1.faker.location.city()}<br>
                        State: ${faker_1.faker.location.state()}<br>
                        ZipCode: ${faker_1.faker.location.zipCode()}<br>
                        Email: ${faker_1.faker.internet.email()}<br><br>
                        About:  ${faker_1.faker.lorem.sentences(3)}`,
            imageLocation: `${array_images_1.arrayImages[randomImage]}`,
        });
        services_1.seedServices[randomService].providers.push(provider);
        yield provider.save()
            .then(res => {
            // console.log(res);
        })
            .catch(err => {
            console.log(err);
        });
    }
    console.log(services_1.seedServices);
    yield service_1.Service.insertMany(services_1.seedServices)
        .then(res => {
        // console.log(res)
    })
        .catch(err => {
        console.log(err);
    });
});
exports.insertProvidersServices = insertProvidersServices;
