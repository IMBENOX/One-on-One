import mongoose from "mongoose";

interface ICategory {
    name: string;
    id  : string;
    objectsId : string;
    isSelected: boolean;
    icon: string;
    backgroundColor : string;
    htmlLocation : string;
}

const categorySchema = new mongoose.Schema<ICategory>({
    name: {
        type: String
    },
    backgroundColor: {
        type: String
    },
})

export const Category = mongoose.model('Category',categorySchema);