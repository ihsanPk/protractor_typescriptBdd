import { Given, Then, When } from "cucumber";
// import { expect } from 'chai';
import { browser,element,by } from "protractor";
import { when } from "q";
import { UserPage } from "../Pages/UserPage";

//data variables
const yaml = require('js-yaml');
const fs = require('fs');

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const userPage = new UserPage();
// const login: LoginPage = new LoginPage();


When(/^Go to Admin widget$/,{timeout: 5 * 5000}, async() => {
   await userPage.clickAdmin(); 
});
When(/^Go to Users Tab$/,{timeout: 5 * 5000}, async() => {
    await userPage.goToUserTab();   
  });  
When(/^Click on Refresh button$/,{timeout: 5 * 5000}, async() => {
    await userPage.clickRefreshButton();
 });  
 When(/^Click on New User icon$/,{timeout: 5 * 5000}, async() => {
    await userPage.clickNewUserIcon();   
 });  

 When(/^Insert User "(.*?)"$/,{timeout: 11 * 50000000}, async(userInfo) => { 
    await userPage.enterUserName(userInfo);
    await userPage.enterFirstName(userInfo);
    await userPage.enterLastName(userInfo);
  });  

  Then(/^Click on save user button$/,{timeout: 2 * 50000000}, async() => { 
    await userPage.clickOnSaveuser(); await browser.sleep(9000);
  }); 
  When(/^Insert Password "(.*?)" and save user$/,{timeout: 2 * 500000}, async(userPassword) => { 
    await userPage.enterUserPassword(userPassword);
    await userPage.clickOnSavePassword(); 
  });  
  When(/^Delete user "(.*?)"$/,{timeout: 5 * 50000}, async(userInfo) => {
    await userPage.delUser(userInfo); 
 }); 
 When(/^Edit user "(.*?)"$/,{timeout: 5 * 50000}, async(userInfo) => {
    await userPage.editUser(userInfo); 
 }); 
 Then(/^Reset User Password "(.*?)"$/,{timeout: 5 * 50000}, async(userInfo) => {
    await userPage.resetPassword(userInfo);
 }); 
 When(/^Go to Group Tab$/,{timeout: 5 * 5000}, async() => {
    await userPage.goToGroupTab();   
  }); 
  When(/^Click on New Group icon$/,{timeout: 5 * 5000}, async() => {
    await userPage.clickCreateGroupIcon(); 
  }); 
  Then(/^Give group name "(.*?)" and click on Save button$/,{timeout: 5 * 50000}, async(groupName) => {
    await userPage.enterGroupName(groupName);
    await userPage.enterGroupDescription(groupName); 
    await userPage.clickOnSaveGroup(); await browser.sleep(2000);
 }); 