"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("cucumber");
// import { expect } from 'chai';
var protractor_1 = require("protractor");
var UserPage_1 = require("../Pages/UserPage");
//data variables
var yaml = require('js-yaml');
var fs = require('fs');
var chai = require("chai").use(require("chai-as-promised"));
var expect = chai.expect;
var userPage = new UserPage_1.UserPage();
// const login: LoginPage = new LoginPage();
cucumber_1.When(/^Go to Admin widget$/, { timeout: 5 * 5000 }, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, userPage.clickAdmin()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When(/^Go to Users Tab$/, { timeout: 5 * 5000 }, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, userPage.goToUserTab()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When(/^Click on Refresh button$/, { timeout: 5 * 5000 }, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, userPage.clickRefreshButton()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When(/^Click on New User icon$/, { timeout: 5 * 5000 }, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, userPage.clickNewUserIcon()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When(/^Insert User "(.*?)"$/, { timeout: 11 * 50000000 }, function (userInfo) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, userPage.enterUserName(userInfo)];
            case 1:
                _a.sent();
                return [4 /*yield*/, userPage.enterFirstName(userInfo)];
            case 2:
                _a.sent();
                return [4 /*yield*/, userPage.enterLastName(userInfo)];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^Click on save user button$/, { timeout: 2 * 50000000 }, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, userPage.clickOnSaveuser()];
            case 1:
                _a.sent();
                return [4 /*yield*/, protractor_1.browser.sleep(9000)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When(/^Insert Password "(.*?)" and save user$/, { timeout: 2 * 500000 }, function (userPassword) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, userPage.enterUserPassword(userPassword)];
            case 1:
                _a.sent();
                return [4 /*yield*/, userPage.clickOnSavePassword()];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When(/^Delete user "(.*?)"$/, { timeout: 5 * 50000 }, function (userInfo) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, userPage.delUser(userInfo)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When(/^Edit user "(.*?)"$/, { timeout: 5 * 50000 }, function (userInfo) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, userPage.editUser(userInfo)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^Reset User Password "(.*?)"$/, { timeout: 5 * 50000 }, function (userInfo) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, userPage.resetPassword(userInfo)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When(/^Go to Group Tab$/, { timeout: 5 * 5000 }, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, userPage.goToGroupTab()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When(/^Click on New Group icon$/, { timeout: 5 * 5000 }, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, userPage.clickCreateGroupIcon()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^Give group name "(.*?)" and click on Save button$/, { timeout: 5 * 50000 }, function (groupName) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, userPage.enterGroupName(groupName)];
            case 1:
                _a.sent();
                return [4 /*yield*/, userPage.enterGroupDescription(groupName)];
            case 2:
                _a.sent();
                return [4 /*yield*/, userPage.clickOnSaveGroup()];
            case 3:
                _a.sent();
                return [4 /*yield*/, protractor_1.browser.sleep(2000)];
            case 4:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=UserSteps.js.map