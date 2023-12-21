import {insertCategories} from "./categories";
import {insertProvidersServices } from "./providers";
import mongoose from "mongoose";

 const seedDatabase = async () => {
    try {
      await mongoose.connect('mongodb://127.0.0.1:27017/OneOnOneDb');
      console.log("Database Connected");
  
      // Seeding Categories
      await insertCategories();
  
      // Seeding Providers
      await insertProvidersServices();
  
      // Close the database connection
      await mongoose.disconnect();
      console.log("Database Disconnected");
    } catch (err) {
      console.error("Error seeding database:", err);
    }
  };
  
  seedDatabase();