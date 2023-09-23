"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const passport_local_mongoose_1 = __importDefault(require("passport-local-mongoose"));
const customerSchema = new mongoose_1.default.Schema({
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
});
customerSchema.plugin(passport_local_mongoose_1.default); //passportLocalMongoose: passport-local-mongoose is a Mongoose plugin that simplifies building username and password-based authentication using Passport.js. 
//.plugin(passportLocalMongoose): By using .plugin() with passportLocalMongoose, you're adding the passportLocalMongoose plugin to your UserSchema. This means that all the methods and fields required for username and password authentication will be added to your UserSchema by this plugin. This includes hashing and salting passwords, comparing passwords during login, and additional methods for managing users.
exports.Customer = mongoose_1.default.model('Customer', customerSchema);
