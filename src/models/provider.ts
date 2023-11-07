import mongoose from "mongoose";

export interface IProvider {
    firstName: string;
    lastName:  string;
    info:     string;
    gender:    string;
    service:   string;
    imageLocation: string;
}

export const providerSchema = new mongoose.Schema<IProvider>({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    info: {
        type: String,
    },
    gender: {
        type: String,
    },
    service: {
        type: String,
    },
    imageLocation: {
        type: String,
    },
})



