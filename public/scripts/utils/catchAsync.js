"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapAsync = void 0;
const wrapAsync = (func) => {
    return (req, res, next) => {
        func(req, res, next).catch(e => next(e));
    };
};
exports.wrapAsync = wrapAsync;
