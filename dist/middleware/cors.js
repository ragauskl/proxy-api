"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cors = void 0;
function cors(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE, REPORT');
    res.setHeader('Access-Control-Allow-Headers', `X-Requested-With, Content-Type, Authorization, Accept`);
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET, REPORT, OPTIONS, AUTHORIZATION');
        return res.status(200).json({});
    }
    next();
}
exports.cors = cors;
//# sourceMappingURL=cors.js.map