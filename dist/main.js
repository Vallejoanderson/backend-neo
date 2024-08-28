"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connection_1 = require("./connection");
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello from Node API');
});
connection_1.sequelize
    .authenticate()
    .then(() => {
    return connection_1.sequelize.sync();
})
    .then(() => {
    app.listen(port, () => { console.log('Server listening on: ', port); });
})
    .catch((err) => { console.error('Connection fail: ', err); });
