"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.endpointNotFound = void 0;
function endpointNotFound(req, res, next) {
    res.status(404).json({ error: 'Not Found' });
}
exports.endpointNotFound = endpointNotFound;
//# sourceMappingURL=endpoint-not-found.js.map