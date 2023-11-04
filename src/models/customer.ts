import mongoose from "mongoose";
import passportLocalMongoose from 'passport-local-mongoose';

export interface ICustomer {
    firstName: string;
    lastName:  string;
    email:     string;
    password?:  string;
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
        required: [true, 'Email cannot be blank'],
        unique: true,
    },
    password: {
        type: String,
         required: [true, 'Password cannot be blank']
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

customerSchema.plugin(passportLocalMongoose);

export const Customer = mongoose.model('Customer',customerSchema);

