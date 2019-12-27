"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// Init app with express
var app = express_1.default();
// Route Handler
app.get('/', function (req, res) {
    res.send('<h1>Test from Express and TypeScript</h1>');
});
// PORT variable
var PORT = process.env.PORT || 3000;
// Listen on localhost
app.listen(PORT, function () {
    console.log("Server running on port " + PORT);
});
