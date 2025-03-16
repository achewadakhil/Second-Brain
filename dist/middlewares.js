"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.zodValidator = void 0;
const zod_1 = __importDefault(require("zod"));
const zodValidator = (req, res, next) => {
    const { email, password } = req.body;
    const schema = zod_1.default.object({
        email: zod_1.default.string().email("Invalid email"),
        password: zod_1.default.string().min(6, "Invalid password")
    });
    const isValid = schema.safeParse({ email, password });
    if (isValid)
        next();
    return res.status(401).json({
        message: "Error occured somewhere"
    });
};
exports.zodValidator = zodValidator;
