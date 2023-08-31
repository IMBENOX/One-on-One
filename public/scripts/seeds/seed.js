"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const categories_1 = require("./categories");
const providers_1 = require("./providers");
//Seeding Categories
(0, categories_1.insertCategories)();
//Seeding Providers
(0, providers_1.insertProvidersServices)();
