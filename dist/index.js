"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors_1 = require("./middleware/cors");
const unhandled_error_1 = require("./middleware/unhandled-error");
const endpoint_not_found_1 = require("./middleware/endpoint-not-found");
const bodyParser = require("body-parser");
const router_1 = require("./endpoints/router");
const app = express();
app.set('trust proxy', true);
app.use(cors_1.cors);
app.use(bodyParser.json(), bodyParser.urlencoded({
    extended: false
}));
app.use(unhandled_error_1.unhandledError);
app.use(router_1.default);
app.use(endpoint_not_found_1.endpointNotFound);
const port = process.env.PORT || 3000;
const server = app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    console.info(`API is running on port ${port}.`);
}));
//# sourceMappingURL=index.js.map