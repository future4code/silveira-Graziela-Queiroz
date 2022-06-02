"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import express from "express";
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const data_1 = require("./data");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//Exercicio 1
app.get("/users", (request, response) => {
    response.status(200).send({ users: data_1.users });
});
//a) metodo GET
//B) entidade / users
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});
