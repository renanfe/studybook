"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router_1 = __importDefault(require("./router"));
var path_1 = __importDefault(require("path"));
var app = express_1.default();
app.set('views', path_1.default.join(__dirname, 'view'));
app.set('view engine', 'ejs');
app.use(express_1.default.static(path_1.default.join(__dirname, '/static')));
app.use("/", router_1.default);
var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("App listening at http://" + host + ":" + port);
});
