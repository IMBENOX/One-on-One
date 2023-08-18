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
exports.seedServices = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const service_1 = require("../models/service");
const provider_1 = require("../models/provider");
mongoose_1.default.connect('mongodb://127.0.0.1:27017/OneOnOneDb')
    .then(() => {
    console.log("Database Connected");
})
    .catch(err => {
    console.log("Conection error");
    console.log(err);
});
exports.seedServices = [
    {
        name: 'Bodybuilding',
        category: 'Fitness',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
        providers: [],
        imageLocation: '../images/bodybuilding.gif',
    },
    {
        name: 'Crossfit',
        category: 'Fitness',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
        providers: [],
        imageLocation: '',
    },
    {
        name: 'Track',
        category: 'Fitness',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
        providers: [],
        imageLocation: '',
    },
    {
        name: 'Yoga',
        category: 'Fitness',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
        providers: [],
        imageLocation: '',
    },
    {
        name: 'Pilates',
        category: 'Fitness',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
        providers: [],
        imageLocation: '',
    },
    {
        name: 'Boxing',
        category: 'Fitness',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
        providers: [],
        imageLocation: '',
    },
    {
        name: 'Hairdressing',
        category: 'Cosmetology',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
        providers: [],
        imageLocation: '',
    },
    {
        name: 'Nails',
        category: 'Cosmetology',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
        providers: [],
        imageLocation: '',
    },
    {
        name: 'Massage',
        category: 'Cosmetology',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
        providers: [],
        imageLocation: '',
    },
    {
        name: 'Skin-care',
        category: 'Cosmetology',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
        providers: [],
        imageLocation: '',
    },
    {
        name: 'Make Up Artist',
        category: 'Cosmetology',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
        providers: [],
        imageLocation: '',
    },
    {
        name: 'House-Painting',
        category: 'Home Repairs',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
        providers: [],
        imageLocation: '',
    },
    {
        name: 'Appliance Service Technician',
        category: 'Home Repairs',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
        providers: [],
        imageLocation: '',
    },
    {
        name: 'Plumber',
        category: 'Home Repairs',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
        providers: [],
        imageLocation: '',
    },
    {
        name: 'Electrician',
        category: 'Home Repairs',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
        providers: [],
        imageLocation: '',
    },
    {
        name: 'Physics Teacher',
        category: 'Teaching',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
        providers: [],
        imageLocation: '',
    },
    {
        name: 'Math Teacher',
        category: 'Teaching',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
        providers: [],
        imageLocation: '',
    },
    {
        name: 'Quitar Teacher',
        category: 'Teaching',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
        providers: [],
        imageLocation: '',
    },
    {
        name: 'Piano Teacher',
        category: 'Teaching',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
        providers: [],
        imageLocation: '',
    },
    {
        name: 'Pathologist',
        category: 'Health',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
        providers: [],
        imageLocation: '',
    },
    {
        name: 'Chiropractor',
        category: 'Health',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
        providers: [],
        imageLocation: '',
    },
    {
        name: 'Dentist',
        category: 'Health',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
        providers: [],
        imageLocation: '',
    },
];
const insertServises = () => __awaiter(void 0, void 0, void 0, function* () {
    yield service_1.Service.deleteMany({});
    exports.seedServices.forEach((serviceFromSeed) => __awaiter(void 0, void 0, void 0, function* () {
        const serviceProviders = yield provider_1.Provider.find({ service: serviceFromSeed.name });
        serviceProviders.forEach(provider => {
            serviceFromSeed.providers.push(`${provider.firstName} ${provider.lastName}`);
        });
        const service = new service_1.Service(serviceFromSeed);
        yield service.save()
            .then(res => {
            console.log(res);
        })
            .catch(err => {
            console.log(err);
        });
        console.log('END');
    }));
});
insertServises();
