import mongoose from "mongoose";

interface ICategory {
    name: string;
    id  : string;
    backgroundColor : string;
}

const categorySchema = new mongoose.Schema<ICategory>({
    name: {
        type: String
    },
    id: {
        type: String
    },
    backgroundColor: {
        type: String
    },
})

export const Category = mongoose.model('Category',categorySchema);