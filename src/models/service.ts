import mongoose from "mongoose"
import { providerSchema, IProvider} from "./provider";


export interface IService {
    name: string;
    category: string;
    description: string;
    providers: IProvider[];
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
    providers : [
        {type: mongoose.Schema.Types.ObjectId, ref: 'Provider'}
    ],
    imageLocation : {
        type: String
    },
})

export const Provider = mongoose.model('Provider',providerSchema);
export const Service = mongoose.model('Service',serviceSchema);