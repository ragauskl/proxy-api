"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unhandledError = void 0;
function unhandledError(err, req, res, next) {
    console.error('Unhandled Error', err);
    if (res.headersSent) {
        return next(err);
    }
    return res.status(500).json({ error: 'Internal Server Error' });
}
exports.unhandledError = unhandledError;
//# sourceMappingURL=unhandled-error.js.map