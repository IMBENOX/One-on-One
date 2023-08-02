import mongoose from "mongoose";

interface IProvider {
    firstName: string;
    lastName:  string;
    info:     string;
    gender:    string;
    service:   string;
}

const providerSchema = new mongoose.Schema<IProvider>({
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
})

export const Provider = mongoose.model('Provider',providerSchema);

