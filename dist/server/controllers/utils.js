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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getKeyspace = void 0;
var getValue = function (key, type, redisClient) { return __awaiter(void 0, void 0, void 0, function () {
    var value, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = type;
                switch (_a) {
                    case 'string': return [3, 1];
                    case 'list': return [3, 3];
                    case 'set': return [3, 5];
                    case 'sortedSet': return [3, 7];
                    case 'hash': return [3, 9];
                }
                return [3, 11];
            case 1: return [4, redisClient.get(key)];
            case 2:
                value = _b.sent();
                ;
                return [3, 11];
            case 3: return [4, redisClient.lrange(key, 0, -1)];
            case 4:
                value = _b.sent();
                ;
                return [3, 11];
            case 5: return [4, redisClient.smembers(key)];
            case 6:
                value = _b.sent();
                ;
                return [3, 11];
            case 7: return [4, redisClient.zrange(key, 0, -1)];
            case 8:
                value = _b.sent();
                ;
                return [3, 11];
            case 9: return [4, redisClient.hgetall(key)];
            case 10:
                value = _b.sent();
                ;
                return [3, 11];
            case 11:
                ;
                return [2, value];
        }
    });
}); };
var getKeyspace = function (redisClient, dbIdx) { return __awaiter(void 0, void 0, void 0, function () {
    var res, scanResults, cursor, keys, _i, keys_1, key, type, value;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                res = [];
                return [4, redisClient.select(dbIdx)];
            case 1:
                _a.sent();
                return [4, redisClient.scan('0', 'COUNT', '100')];
            case 2:
                scanResults = _a.sent();
                cursor = scanResults[0];
                keys = scanResults[1];
                _a.label = 3;
            case 3:
                _i = 0, keys_1 = keys;
                _a.label = 4;
            case 4:
                if (!(_i < keys_1.length)) return [3, 8];
                key = keys_1[_i];
                return [4, redisClient.type(key)];
            case 5:
                type = _a.sent();
                return [4, getValue(key, type, redisClient)];
            case 6:
                value = _a.sent();
                res.push({
                    key: key,
                    type: type,
                    value: value
                });
                _a.label = 7;
            case 7:
                _i++;
                return [3, 4];
            case 8: return [4, redisClient.scan(cursor, 'COUNT', '100')];
            case 9:
                scanResults = _a.sent();
                cursor = scanResults[0];
                keys = scanResults[1];
                _a.label = 10;
            case 10:
                if (cursor !== '0') return [3, 3];
                _a.label = 11;
            case 11: return [2, res];
        }
    });
}); };
exports.getKeyspace = getKeyspace;
