import { browser, element, by, protractor } from 'protractor'
import { IdentificationType, BasePage } from './BasePage';
import { constants } from 'os';
const chai = require("chai").use(require("chai-as-promised"));

//data variables
const yaml = require('js-yaml');
const fs = require('fs');
let cred = yaml.safeLoad(fs.readFileSync('./Test/testData/users.yml', 'utf8'));
let group = yaml.safeLoad(fs.readFileSync('./Test/testData/group.yml', 'utf8'));
const expect = chai.expect;


export class UserPage extends BasePage{
  adminButton = element(by.id('roles_icon'));
  //User Tab
  usersTab = element(by.id('usersgridtab'));
  refreshButton = element(by.id('rulesgridupdatebutton'));
  createUserIcon = element(by.id('rolesgridcreateuserbutton'));
  userNameField = element(by.xpath('.//*[@data-container-for="name"]/input'));
  firstNameField = element(by.xpath('.//*[@data-container-for="firstName"]/input'));
  lastNameField = element(by.xpath('.//*[@data-container-for="lastName"]/input'));
  saveUserButton = element(by.xpath('.//*[@id="usersgrid"]//button[@title="Save"]'));
  userPasswordField = element(by.id('usersgridnewuserpasword'));
  saveUserPasswordIcon = element(by.id('usersgridnewuserpaswordclose'));
  //groups tab
  groupsTab = element(by.id('groupsgridtab'));
  createGroupIcon = element(by.id('groupsgridcreatebutton'));
  groupNameField = element(by.xpath('.//input[@name="name"]'));
  groupSaveButton = element(by.xpath('//*[@id="groupsgrid"]/div[3]/div[1]/table/tbody/tr[1]/td[1]/a[1]/button'));
  groupDescriptionField = element(by.xpath('.//input[@name="description"]'));
  groupCaseSelectButton = element(by.xpath('.//td[@data-container-for="cases"]//div[@class="pq-select-text"]'));
  groupUserSelectButton = element(by.xpath('.//td[@data-container-for="users"]//div[@class="pq-select-text"]'));
  groupRolesSelectButton = element(by.xpath('.//td[@data-container-for="roles"]//div[@class="pq-select-text"]'));
  groupRolesSelectDropdown = element(by.id('rolesgroupsgridrolescell'));
  
  
  async clickAdmin() {
    await this.adminButton.click();  
    expect(this.usersTab).to.exist;
    }
 async goToUserTab(){
     await this.usersTab.click();
     await expect(this.refreshButton).to.exist;
 }
 async clickRefreshButton(){
    await this.refreshButton.click();
    // expect(this.createUserIcon).dom.to.be.visible();
    await browser.sleep(10000);
}
async clickNewUserIcon(){
    await this.createUserIcon.click();
    expect(this.userNameField).to.exist;
  }
  async enterUserName(name: string){
    await this.userNameField.sendKeys(cred[name]['username']);  
  }
  async enterFirstName(name: string){
    await this.firstNameField.sendKeys(cred[name]['firstname']);
  }
  async enterLastName(name: string){
    await this.lastNameField.sendKeys(cred[name]['lastName']);
  }
  async clickOnSaveuser(){
    await this.saveUserButton.click();
    expect(this.userPasswordField).to.exist;
  }
  async enterUserPassword(pass: string){
    await this.userPasswordField.sendKeys(cred[pass]['password']);
  }
  async clickOnSavePassword(){
    await this.saveUserPasswordIcon.click();
    // //*[@id="usersgrid"]//*[text()=cred[name]['username']]
    // expect(element(by.xpath('h.//table[@role="grid"]//td[@role="gridcell" and contains(text(), "automationuser")]'))).to.be.present;
    //  expect(element(by.xpath('.//table[@role="grid"]//td[@role="gridcell" and contains(text(), "automationuser00")]'))).to.exist;
  }
  async editUser(userName: string){
    await browser.sleep(200);
    await element(by.xpath('.//table[@role="grid"]//td[@role="gridcell" and contains(text(), "'+cred[userName]['username']+'")]/parent::tr//button[@title="Edit"]')).click();
    // const popupAlert = browser.switchTo().alert();
    // const alertText = popupAlert.getText();
    // expect(alertText).to.match('Are you sure you want to delete this users?');
    // await browser.switchTo().alert().accept();
    await expect(element(by.xpath('.//td[@data-container-for="groups"]//div[@class="pq-select-text"]')), 'nooo why fail??').to.exist;
    await browser.sleep(2000);
    await element(by.xpath('.//td[@data-container-for="groups"]//div[@class="pq-select-text"]')).click();
    await browser.sleep(3000); // '//div[contains(@class, "pq-select-menu")]//*[contains(text(),"'+cred[userName]['username']+'")]'
    // await element(by.xpath('//*[@id="quincbody"]/*//div[contains(@class, "pq-select-menu")]//*[contains(text(),"Users(1003)")]')).click();

    // await element(by.xpath('//*[@id="quincbody"]/*//div[contains(@class, "pq-select-menu")]//*[contains(text(),"Application Administrators(1001)")]')).click();
    // await element(by.xpath('//*[@id="quincbody"]/*//div[contains(@class, "pq-select-menu")]//*[contains(text(),"Users(1003)")]')).click();
    let inputEle = element(by.xpath('//div[@class="pq-select-menu"]//span[text()="Users(1003)"]/preceding-sibling::input'));
console.log('**********************************');
console.log(await inputEle.isSelected());
let val=await inputEle.isSelected();
console.log('**********************************');
console.log(val);
if (val === true){
    console.log('Is Already selected');
}else{
    await element(by.xpath('//*[@id="quincbody"]/*//div[contains(@class, "pq-select-menu")]//*[contains(text(),"Users(1003)")]')).click();
}
}
  async delUser(userName: string){
    await element(by.xpath('.//table[@role="grid"]//td[@role="gridcell" and contains(text(), "'+cred[userName]['username']+'")]/parent::tr//button[@title="Delete"]')).click();
    // const popupAlert = browser.switchTo().alert();
    // const alertText = popupAlert.getText();
    // expect(alertText).to.match('Are you sure you want to delete this users?');
    await browser.switchTo().alert().accept();
    } 
    async resetPassword(userName: string){
        await element(by.xpath('.//table[@role="grid"]//td[@role="gridcell" and contains(text(), "'+cred[userName]['username']+'")]/parent::tr//button[@title="Reset Password"]')).click();
        await browser.switchTo().alert().accept();
        } 
    async goToGroupTab(){
        await expect(this.groupsTab, 'unable to find group tab').to.exist;
        await this.groupsTab.click();
        await expect(this.createGroupIcon,'Unable to load group tab').to.exist;
     }
     async clickCreateGroupIcon(){
        await this.createGroupIcon.click();
        await expect(this.groupNameField,'Unable to find group name element').to.exist;
     }
     async enterGroupName(groupName: string){
        await expect(this.groupNameField,'Unable to find group name element').to.exist;
        await this.groupNameField.sendKeys(group[groupName]['groupname']);
    } 
    async enterGroupDescription(groupName: string){
        await expect(this.groupDescriptionField,'Unable to find group description element').to.exist;
        await this.groupDescriptionField.sendKeys(group[groupName]['description']);
    }
    async clickOnSaveGroup(){
        await this.groupSaveButton.click();
     }

}
