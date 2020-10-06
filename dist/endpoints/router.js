"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router_1 = require("./proxy/router");
const router = express_1.Router({ mergeParams: true });
router.get('/', (req, res) => {
    res.status(200).send('Welcome to server.');
});
router.use(`/proxy`, router_1.default);
exports.default = router;
//# sourceMappingURL=router.js.map