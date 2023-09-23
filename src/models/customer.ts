import mongoose from "mongoose";
import passportLocalMongoose from 'passport-local-mongoose';

export interface ICustomer {
    firstName: string;
    lastName:  string;
    email:     string;
    password:  string;
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

customerSchema.plugin(passportLocalMongoose);//passportLocalMongoose: passport-local-mongoose is a Mongoose plugin that simplifies building username and password-based authentication using Passport.js. 
//.plugin(passportLocalMongoose): By using .plugin() with passportLocalMongoose, you're adding the passportLocalMongoose plugin to your UserSchema. This means that all the methods and fields required for username and password authentication will be added to your UserSchema by this plugin. This includes hashing and salting passwords, comparing passwords during login, and additional methods for managing users.

export const Customer = mongoose.model('Customer',customerSchema);

