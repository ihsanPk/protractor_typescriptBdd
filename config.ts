import * as path from "path";
import { browser, Config } from "protractor";
import { Reporter } from "./Test/hooks/reporter";
const jsonReports = process.cwd() + "/reports/json";

export const config: Config = {
    defaultTimeoutInterval: 144550000,

    seleniumAddress: "http://127.0.0.1:4444/wd/hub",

    SELENIUM_PROMISE_MANAGER: false,

    baseUrl: "http://offshr1-win10:4443/LoginPage.html",
    suites:{
      "Login":"../features/login.feature",
      "case":"../features/case.feature"
    },

    capabilities: {
      browserName: 'chrome',
      unexpectedAlertBehaviour: 'accept'
    },
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    ignoreUncaughtExceptions: true,
    specs: [
        "./Test/features/*.feature",
    ],

    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        browser.manage().timeouts().setScriptTimeout(6000000);
        Reporter.createDirectory(jsonReports);
    },
    multiCapabilities: [{
      browserName: 'chrome',
      // shardTestFiles: true,
      // maxInstances: 1,
      chromeOptions: {
          args: ['disable-infobars']
      },
      metadata: {
  
          device: 'VM',
          platform: {
              name: 'windows',
              version: '10'
          }

      }
  }
  ],  
    cucumberOpts: {
      
        // required step definitions
        compiler: [],
        require: ['../reporting/cucumber-screenshot.js','../steps/*.js',
            path.resolve(process.cwd(), './/Test/steps/*.js'),
        ],
        // require : [ '../steps/*.js',
        // path.resolve(process.cwd(), './/Test/steps/*.js'),
        //  ],
         removeOriginalJsonReportFile : true,
        format: "json:./reports/json/cucumber_report.json",
        strict  : true,
        dryRun  : false,
        tags    : []
      },
      onComplete: () => {
        Reporter.createHTMLReport();
    },

plugins: [{
  package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
      options:{
      automaticallyGenerateReport: true,
      removeExistingJsonReportFile: true,
      openReportInBrowser: true,
      pageTitle : 'QUIN-C',
      reportName :'QUIN-C Test Report',
   
      //jsonOutputPath: './features',     //?featuresJsonPath 
      removeOriginalJsonReportFile: true, //! This Option will Delete Generated Json File
      pageFooter: '<div class="container"><div class="row"><div class="col-sm-4"></div><img src="https://res-4.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1397183701/77e5f4c19af7b22148f5e1016925b98e.jpg" class="img-fluid"alt="no image"></div>', 
                displayDuration: true,
            }
        }],
    getPageTimeout: 30000,
};
