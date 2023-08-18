import mongoose from "mongoose"

interface IService {
    name: string;
    category: string;
    description: string;
    providers: string[];
    imageLocation: string;
}

const serviceSchema = new mongoose.Schema<IService> ({
    name:{
        type: String
    },
    category: {
        type: String
    },
    description: {
        type: String
    },
    providers : {
        type: [String]
    },
    imageLocation : {
        type: String
    },
})

export const Service = mongoose.model('Service',serviceSchema);