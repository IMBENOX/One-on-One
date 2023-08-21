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
exports.insertProviders = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const provider_1 = require("../models/provider");
const array_names_1 = require("./array-names");
const services_1 = require("./services");
mongoose_1.default.connect('mongodb://127.0.0.1:27017/OneOnOneDb')
    .then(() => {
    console.log("Database Connected");
})
    .catch(err => {
    console.log("Conection error");
    console.log(err);
});
const insertProviders = () => __awaiter(void 0, void 0, void 0, function* () {
    yield provider_1.Provider.deleteMany({});
    for (let i = 0; i < 100; i++) {
        const randomName1 = Math.floor(Math.random() * 1000);
        const randomName2 = Math.floor(Math.random() * 1000);
        const randomService = Math.floor(Math.random() * services_1.seedServices.length);
        const provider = new provider_1.Provider({
            firstName: `${array_names_1.arrayNames[randomName1]}`,
            lastName: `${array_names_1.arrayNames[randomName2]}`,
            service: `${services_1.seedServices[randomService].name}`
        });
        yield provider.save()
            .then(res => {
            // console.log(res);
        })
            .catch(err => {
            console.log(err);
        });
    }
});
exports.insertProviders = insertProviders;
// insertProviders();
