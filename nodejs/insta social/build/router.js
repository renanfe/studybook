"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var main_controller_1 = require("./controller/main.controller");
var router = express_1.default.Router();
router.get("/", main_controller_1.home);
router.get("/2", main_controller_1.home2);
exports.default = router;
