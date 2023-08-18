"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrapAsync = (func) => {
    return (req, res, next) => {
        func(req, res, next).catch(e => next(e));
    };
};
exports.default = wrapAsync;
