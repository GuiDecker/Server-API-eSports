"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/ads", (request, response) => {
    console.log("teste ");
    return response.json([
        { id: 1, name: "Anúncio 1" },
        { id: 2, name: "Anúncio 2" },
        { id: 3, name: "Anúncio 3" },
        { id: 4, name: "Anúncio 4" },
    ]);
});
app.listen(3333);
