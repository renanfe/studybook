"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
exports.home = function (req, res) { return res.render('index.html'); };
exports.home2 = function (req, res) { return res.sendFile(path_1.default.join(__dirname, '../view/index.html')); };
