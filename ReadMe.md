Pre-Req:
1. Node.Js is downloaded and installed
	https://nodejs.org/en/download/
	
	confirm installation is successful by checking following commands:
	>> node --version
	>> npm --version
	
2. Install Webdriver manager
	>> webdriver-manager update
	
3. Run WebDriver Manager
	>> webdriver-manager start
	
Run Scripts
1. Open command prompt and navigate to project directory like "C:\QuinCCucumber"
==To run complete bat
protractor config.js 
== To run specific feature file
protractor config.js --suite Login
== To run specific test with cucumber tag
 protractor config.js --cucumberOpts.tags='@Login'