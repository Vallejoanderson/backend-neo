"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const database = (_a = process.env.DATABASE_NAME) !== null && _a !== void 0 ? _a : 'neo';
const username = (_b = process.env.DATABASE_USER) !== null && _b !== void 0 ? _b : 'postgres';
const password = (_c = process.env.DATABASE_PASSWORD) !== null && _c !== void 0 ? _c : 'postgres';
const host = (_d = process.env.DATABASE_HOST) !== null && _d !== void 0 ? _d : 'localhost';
const sequelize = new sequelize_1.Sequelize(database, username, password, {
    host: host,
    dialect: 'postgres',
});
exports.sequelize = sequelize;
