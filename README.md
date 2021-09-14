# WebdriverIOCucumberJSFramework
This repository contains a demonstration project for Automation practice. In this project, the user registers in application with personal information and the registered user login to Automation practice application. Then user add a product to a card and checkout the product until payment.

Features This project developed with below features

• WebdriverIO

• Cucumber

• Javascript

• Allure

• Page object model pattern

**Pre-requisites:**
Below are the pre-requisites
• Node. js
• NPM
• Visual studio code

Below are the steps to install the Dependencies in workspace terminal

**Steps:**
1.npm init- This command used to intialize the workspace as npm project. After initialization, package.json folder will get created in workspace directory

2. npm  install @wdio/cli - This command installs the webdriverIO package separately in workspace with the file created with name package-lock.json

3.npx wdio config- This command creates a config file with the given set of options where the framework created.

4.npmx wdio run wdio.conf.js- This command execute the test in the created framework

**Reporting:**
To generate allure report below steps to be entered in workspace terminal.

1. npm install @wdio/allure-reporter --save-dev 

2.Run test with below command
   npmx wdio run wdio.conf.js

3.Open the allure report with below command
   npm run open-allure


