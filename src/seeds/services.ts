import mongoose from 'mongoose';
import { Service } from '../models/service';
import {Provider} from "../models/provider";



mongoose.connect('mongodb://127.0.0.1:27017/OneOnOneDb')
    .then(() => {
        console.log("Database Connected")
    })
    .catch(err => {
        console.log("Conection error")
        console.log(err)
    })

    interface ISeedService {
        name: string;
        category: string;
        description: string;
        providers: string[];
    }

    export const seedServices: ISeedService[] = [
        {
            name: 'Bodybuilding',
            category: 'Fitness',
            description  : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
            providers: [],
        },
        {
            name: 'Crossfit',
            category: 'Fitness',
            description  : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
            providers: [],
    
        },
        {
            name: 'Track',
            category: 'Fitness',
            description  : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
            providers: [],
        },
        {
            name: 'Yoga',
            category: 'Fitness',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
            providers: [],
        },
        {
            name: 'Pilates',
            category: 'Fitness',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
            providers: [],
        },
        {
            name: 'Boxing',
            category: 'Fitness',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
            providers: [],
        },
        {
            name: 'Hairdressing',
            category: 'Cosmetology',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
            providers: [],
        },
        {
            name: 'Nails',
            category: 'Cosmetology',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
            providers: [],
        },
        {
            name: 'Massage',
            category: 'Cosmetology',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
            providers: [],
        },
        {
            name: 'Skin-care',
            category: 'Cosmetology',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
            providers: [],
        },
        {
            name: 'Make Up Artist',
            category: 'Cosmetology',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
            providers: [],
        },
        {
            name: 'House-Painting',
            category: 'Home Repairs',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
            providers: [],
        },
        {
            name: 'Appliance Service Technician',
            category: 'Home Repairs',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
            providers: [],
        },
        {
            name: 'Plumber',
            category: 'Home Repairs',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
            providers: [],
        },
        {
            name: 'Electrician',
            category: 'Home Repairs',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
            providers: [],
        },
        {
            name: 'Physics Teacher',
            category: 'Teaching',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
            providers: [],
        },
        {
            name: 'Math Teacher',
            category: 'Teaching',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
            providers: [],
        },
        {
            name: 'Quitar Teacher',
            category: 'Teaching',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
            providers: [],
        },
        {
            name: 'Piano Teacher',
            category: 'Teaching',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
            providers: [],
        },
        {
            name: 'Pathologist',
            category: 'Health',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
            providers: [],
        },
        {
            name: 'Chiropractor',
            category: 'Health',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
            providers: [],
        },
        {
            name: 'Dentist',
            category: 'Health',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
            providers: [],
        },
    ]

    const insertServises = async () => {
        await Service.deleteMany({});
        seedServices.forEach(async (serviceFromSeed) => {
            const serviceProviders = await Provider.find({service: serviceFromSeed.name})
            serviceProviders.forEach( provider => {
                serviceFromSeed.providers.push(`${provider.firstName} ${provider.lastName}`);
            })
            const service = new Service(serviceFromSeed);
            await service.save()
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
            console.log('END');
        });
    }

    insertServises();