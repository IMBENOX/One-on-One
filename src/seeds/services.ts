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
        imageLocation: string;
    }

    export const seedServices: ISeedService[] = [
        {
            name: 'Bodybuilding',
            category: 'Fitness',
            description  : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
            providers: [],
            imageLocation: '../images/bodybuilding.gif',
        },
        {
            name: 'Crossfit',
            category: 'Fitness',
            description  : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
            providers: [],
            imageLocation: '',
    
        },
        {
            name: 'Track',
            category: 'Fitness',
            description  : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
            providers: [],
            imageLocation: '',
        },
        {
            name: 'Yoga',
            category: 'Fitness',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
            providers: [],
            imageLocation: '',
        },
        {
            name: 'Pilates',
            category: 'Fitness',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
            providers: [],
            imageLocation: '',
        },
        {
            name: 'Boxing',
            category: 'Fitness',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
            providers: [],
            imageLocation: '',
        },
        {
            name: 'Hairdressing',
            category: 'Cosmetology',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
            providers: [],
            imageLocation: '',
        },
        {
            name: 'Nails',
            category: 'Cosmetology',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
            providers: [],
            imageLocation: '',
        },
        {
            name: 'Massage',
            category: 'Cosmetology',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
            providers: [],
            imageLocation: '',
        },
        {
            name: 'Skin-care',
            category: 'Cosmetology',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
            providers: [],
            imageLocation: '',
        },
        {
            name: 'Make Up Artist',
            category: 'Cosmetology',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
            providers: [],
            imageLocation: '',
        },
        {
            name: 'House-Painting',
            category: 'Home Repairs',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
            providers: [],
            imageLocation: '',
        },
        {
            name: 'Appliance Service Technician',
            category: 'Home Repairs',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
            providers: [],
            imageLocation: '',
        },
        {
            name: 'Plumber',
            category: 'Home Repairs',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
            providers: [],
            imageLocation: '',
        },
        {
            name: 'Electrician',
            category: 'Home Repairs',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
            providers: [],
            imageLocation: '',
        },
        {
            name: 'Physics Teacher',
            category: 'Teaching',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
            providers: [],
            imageLocation: '',
        },
        {
            name: 'Math Teacher',
            category: 'Teaching',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
            providers: [],
            imageLocation: '',
        },
        {
            name: 'Quitar Teacher',
            category: 'Teaching',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
            providers: [],
            imageLocation: '',
        },
        {
            name: 'Piano Teacher',
            category: 'Teaching',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
            providers: [],
            imageLocation: '',
        },
        {
            name: 'Pathologist',
            category: 'Health',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
            providers: [],
            imageLocation: '',
        },
        {
            name: 'Chiropractor',
            category: 'Health',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
            providers: [],
            imageLocation: '',
        },
        {
            name: 'Dentist',
            category: 'Health',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
            providers: [],
            imageLocation: '',
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