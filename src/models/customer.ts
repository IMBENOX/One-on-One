import mongoose from "mongoose";

interface ICustomer {
    firstName: string;
    lastName:  string;
    email:     string;
    gender:    string;
    servise:   string;
    fitnessCategory: number;
    suggestions: string;
    sendInfo: string;
}

const customerSchema = new mongoose.Schema<ICustomer>({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
    },
    servise: {
        type: String,
    },
    fitnessCategory: {
        type: Number,
    },
    suggestions: {
        type: String,
    },
    sendInfo: {
        type: String,
        default: 'false',
    }
})

export const Customer = mongoose.model('Customer',customerSchema);

