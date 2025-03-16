"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("./middlewares");
const app = (0, express_1.default)();
app.use(express_1.default.json());
//@ts-ignore
app.post("/signup", middlewares_1.zodValidator, (req, res) => {
    const { email, password } = req.body;
    res.json({
        message: "Seccuess"
    });
});
app.post("/signin", (req, res) => {
});
app.post("/content", (req, res) => {
});
app.get("/content", (req, res) => {
});
app.delete("/content", (req, res) => {
});
app.post("/share", (req, res) => {
});
app.get("/:shareLink", (req, res) => {
});
app.listen(8080, () => console.log("Server is running at 8080"));
