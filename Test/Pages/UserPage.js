"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var BasePage_1 = require("./BasePage");
var chai = require("chai").use(require("chai-as-promised"));
//data variables
var yaml = require('js-yaml');
var fs = require('fs');
var cred = yaml.safeLoad(fs.readFileSync('./Test/testData/users.yml', 'utf8'));
var group = yaml.safeLoad(fs.readFileSync('./Test/testData/group.yml', 'utf8'));
var expect = chai.expect;
var UserPage = /** @class */ (function (_super) {
    __extends(UserPage, _super);
    function UserPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.adminButton = protractor_1.element(protractor_1.by.id('roles_icon'));
        //User Tab
        _this.usersTab = protractor_1.element(protractor_1.by.id('usersgridtab'));
        _this.refreshButton = protractor_1.element(protractor_1.by.id('rulesgridupdatebutton'));
        _this.createUserIcon = protractor_1.element(protractor_1.by.id('rolesgridcreateuserbutton'));
        _this.userNameField = protractor_1.element(protractor_1.by.xpath('.//*[@data-container-for="name"]/input'));
        _this.firstNameField = protractor_1.element(protractor_1.by.xpath('.//*[@data-container-for="firstName"]/input'));
        _this.lastNameField = protractor_1.element(protractor_1.by.xpath('.//*[@data-container-for="lastName"]/input'));
        _this.saveUserButton = protractor_1.element(protractor_1.by.xpath('.//*[@id="usersgrid"]//button[@title="Save"]'));
        _this.userPasswordField = protractor_1.element(protractor_1.by.id('usersgridnewuserpasword'));
        _this.saveUserPasswordIcon = protractor_1.element(protractor_1.by.id('usersgridnewuserpaswordclose'));
        //groups tab
        _this.groupsTab = protractor_1.element(protractor_1.by.id('groupsgridtab'));
        _this.createGroupIcon = protractor_1.element(protractor_1.by.id('groupsgridcreatebutton'));
        _this.groupNameField = protractor_1.element(protractor_1.by.xpath('.//input[@name="name"]'));
        _this.groupSaveButton = protractor_1.element(protractor_1.by.xpath('//*[@id="groupsgrid"]/div[3]/div[1]/table/tbody/tr[1]/td[1]/a[1]/button'));
        _this.groupDescriptionField = protractor_1.element(protractor_1.by.xpath('.//input[@name="description"]'));
        _this.groupCaseSelectButton = protractor_1.element(protractor_1.by.xpath('.//td[@data-container-for="cases"]//div[@class="pq-select-text"]'));
        _this.groupUserSelectButton = protractor_1.element(protractor_1.by.xpath('.//td[@data-container-for="users"]//div[@class="pq-select-text"]'));
        _this.groupRolesSelectButton = protractor_1.element(protractor_1.by.xpath('.//td[@data-container-for="roles"]//div[@class="pq-select-text"]'));
        _this.groupRolesSelectDropdown = protractor_1.element(protractor_1.by.id('rolesgroupsgridrolescell'));
        return _this;
    }
    UserPage.prototype.clickAdmin = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.adminButton.click()];
                    case 1:
                        _a.sent();
                        expect(this.usersTab).to.exist;
                        return [2 /*return*/];
                }
            });
        });
    };
    UserPage.prototype.goToUserTab = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usersTab.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, expect(this.refreshButton).to.exist];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserPage.prototype.clickRefreshButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.refreshButton.click()];
                    case 1:
                        _a.sent();
                        // expect(this.createUserIcon).dom.to.be.visible();
                        return [4 /*yield*/, protractor_1.browser.sleep(10000)];
                    case 2:
                        // expect(this.createUserIcon).dom.to.be.visible();
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserPage.prototype.clickNewUserIcon = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createUserIcon.click()];
                    case 1:
                        _a.sent();
                        expect(this.userNameField).to.exist;
                        return [2 /*return*/];
                }
            });
        });
    };
    UserPage.prototype.enterUserName = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userNameField.sendKeys(cred[name]['username'])];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserPage.prototype.enterFirstName = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.firstNameField.sendKeys(cred[name]['firstname'])];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserPage.prototype.enterLastName = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.lastNameField.sendKeys(cred[name]['lastName'])];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserPage.prototype.clickOnSaveuser = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.saveUserButton.click()];
                    case 1:
                        _a.sent();
                        expect(this.userPasswordField).to.exist;
                        return [2 /*return*/];
                }
            });
        });
    };
    UserPage.prototype.enterUserPassword = function (pass) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userPasswordField.sendKeys(cred[pass]['password'])];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserPage.prototype.clickOnSavePassword = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.saveUserPasswordIcon.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserPage.prototype.editUser = function (userName) {
        return __awaiter(this, void 0, void 0, function () {
            var inputEle, _a, _b, val;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.sleep(200)];
                    case 1:
                        _c.sent();
                        return [4 /*yield*/, protractor_1.element(protractor_1.by.xpath('.//table[@role="grid"]//td[@role="gridcell" and contains(text(), "' + cred[userName]['username'] + '")]/parent::tr//button[@title="Edit"]')).click()];
                    case 2:
                        _c.sent();
                        // const popupAlert = browser.switchTo().alert();
                        // const alertText = popupAlert.getText();
                        // expect(alertText).to.match('Are you sure you want to delete this users?');
                        // await browser.switchTo().alert().accept();
                        return [4 /*yield*/, expect(protractor_1.element(protractor_1.by.xpath('.//td[@data-container-for="groups"]//div[@class="pq-select-text"]')), 'nooo why fail??').to.exist];
                    case 3:
                        // const popupAlert = browser.switchTo().alert();
                        // const alertText = popupAlert.getText();
                        // expect(alertText).to.match('Are you sure you want to delete this users?');
                        // await browser.switchTo().alert().accept();
                        _c.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 4:
                        _c.sent();
                        return [4 /*yield*/, protractor_1.element(protractor_1.by.xpath('.//td[@data-container-for="groups"]//div[@class="pq-select-text"]')).click()];
                    case 5:
                        _c.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(3000)];
                    case 6:
                        _c.sent(); // '//div[contains(@class, "pq-select-menu")]//*[contains(text(),"'+cred[userName]['username']+'")]'
                        inputEle = protractor_1.element(protractor_1.by.xpath('//div[@class="pq-select-menu"]//span[text()="Users(1003)"]/preceding-sibling::input'));
                        console.log('**********************************');
                        _b = (_a = console).log;
                        return [4 /*yield*/, inputEle.isSelected()];
                    case 7:
                        _b.apply(_a, [_c.sent()]);
                        return [4 /*yield*/, inputEle.isSelected()];
                    case 8:
                        val = _c.sent();
                        console.log('**********************************');
                        console.log(val);
                        if (!(val === true)) return [3 /*break*/, 9];
                        console.log('Is Already selected');
                        return [3 /*break*/, 11];
                    case 9: return [4 /*yield*/, protractor_1.element(protractor_1.by.xpath('//*[@id="quincbody"]/*//div[contains(@class, "pq-select-menu")]//*[contains(text(),"Users(1003)")]')).click()];
                    case 10:
                        _c.sent();
                        _c.label = 11;
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    UserPage.prototype.delUser = function (userName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.element(protractor_1.by.xpath('.//table[@role="grid"]//td[@role="gridcell" and contains(text(), "' + cred[userName]['username'] + '")]/parent::tr//button[@title="Delete"]')).click()];
                    case 1:
                        _a.sent();
                        // const popupAlert = browser.switchTo().alert();
                        // const alertText = popupAlert.getText();
                        // expect(alertText).to.match('Are you sure you want to delete this users?');
                        return [4 /*yield*/, protractor_1.browser.switchTo().alert().accept()];
                    case 2:
                        // const popupAlert = browser.switchTo().alert();
                        // const alertText = popupAlert.getText();
                        // expect(alertText).to.match('Are you sure you want to delete this users?');
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserPage.prototype.resetPassword = function (userName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.element(protractor_1.by.xpath('.//table[@role="grid"]//td[@role="gridcell" and contains(text(), "' + cred[userName]['username'] + '")]/parent::tr//button[@title="Reset Password"]')).click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.switchTo().alert().accept()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserPage.prototype.goToGroupTab = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, expect(this.groupsTab, 'unable to find group tab').to.exist];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.groupsTab.click()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, expect(this.createGroupIcon, 'Unable to load group tab').to.exist];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserPage.prototype.clickCreateGroupIcon = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createGroupIcon.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, expect(this.groupNameField, 'Unable to find group name element').to.exist];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserPage.prototype.enterGroupName = function (groupName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, expect(this.groupNameField, 'Unable to find group name element').to.exist];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.groupNameField.sendKeys(group[groupName]['groupname'])];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserPage.prototype.enterGroupDescription = function (groupName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, expect(this.groupDescriptionField, 'Unable to find group description element').to.exist];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.groupDescriptionField.sendKeys(group[groupName]['description'])];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserPage.prototype.clickOnSaveGroup = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.groupSaveButton.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return UserPage;
}(BasePage_1.BasePage));
exports.UserPage = UserPage;
//# sourceMappingURL=UserPage.js.map