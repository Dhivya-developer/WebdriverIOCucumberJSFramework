import { Given, When, Then } from '@wdio/cucumber-framework';

import myStorePage from '../pageobjects/homepage';

import helper from '../Utility/helper';

var emailID_text;
var password_text = "Test123"

Given(/^I am on Automation practice website page (.+)$/, async function (homepageurl) {
  await browser.url(homepageurl)
  await browser.maximizeWindow()
  let titlestr = await browser.getTitle();
  console.log("Page Title is", titlestr)
  await browser.pause(3000)
});

Given(/^I signIn and create an account$/, async function () {

  //Clicking Sign In link
  await myStorePage.signIn.waitForClickable({ timeout: 10000 });
  await myStorePage.signIn.click()
  await browser.pause(5000)

  emailID_text= helper.generateMailID(); 
  console.log("The mail id is", emailID_text)

  //Enter the mail id   
  myStorePage.waitForElementToLoad(await myStorePage.enter_mailId)
  await (await myStorePage.enter_mailId).setValue(emailID_text)
  await browser.pause(3000);

  //Click create account
  //const btncreate_account = $('[id=SubmitCreate]')
  myStorePage.waitForElementToLoad(await myStorePage.btncreate_account)
  await (await myStorePage.btncreate_account).click();
  await browser.pause(3000);
});

When(/^I enter personal information details (.+),(.+),(.+),(.+),(.+),(.+),(.+),(.+),(.+)$/, async function (firstname_value, lastname_value, password, address, city, state, zipcode, country, mobnumber) {

 
  //Enter firstname and lastname

  myStorePage.waitForElementToLoad(await myStorePage.f_name)
  await (await myStorePage.f_name).clearValue()  
  await (await myStorePage.f_name).setValue(firstname_value)
  await browser.pause(3000)

  
  await myStorePage.l_name.waitForExist({timeout : 3000 });
  await (await myStorePage.l_name).clearValue()  
  await (await myStorePage.l_name).setValue(lastname_value)
  await browser.pause(3000)

  //Enter Password

  await myStorePage.ele_password.waitForExist({timeout : 3000 });
  await (await myStorePage.ele_password).setValue(password)
  await browser.pause(3000)

  //Enter firstname and lastname in address field
  await myStorePage.ele_f_name.waitForExist({timeout : 3000 });
  await (await myStorePage.ele_f_name).clearValue()
  await (await myStorePage.ele_f_name).setValue(firstname_value)
  await browser.pause(3000)

  await myStorePage.ele_l_name.waitForExist({timeout : 3000 });
  await (await myStorePage.ele_l_name).clearValue()
  await (await myStorePage.ele_l_name).setValue(lastname_value)
  await browser.pause(3000)

  //Address

  await myStorePage.ele_address.waitForExist({timeout : 3000 });
  await (await myStorePage.ele_address).clearValue()
  await (await myStorePage.ele_address).setValue(address)
  await browser.pause(3000)

  //City

  await myStorePage.ele_city.waitForExist({timeout : 3000 });
  await (await myStorePage.ele_city).clearValue()
  await (await myStorePage.ele_city).setValue(city)
  await browser.pause(3000)

  //State
 
  await myStorePage.ele_state.waitForExist({timeout : 3000 });
  await (await myStorePage.ele_state).click()
  await browser.pause(3000)
  await (await myStorePage.ele_state).selectByVisibleText(state)
  await browser.pause(5000)

  //Postal code
  
  await myStorePage.ele_postcode.waitForExist({timeout : 3000 });
  await (await myStorePage.ele_postcode).setValue(zipcode)
  await browser.pause(3000)

  //Country

  await myStorePage.ele_state.waitForExist({timeout : 3000 });
  await (await myStorePage.ele_country).click()
  await (await myStorePage.ele_country).selectByVisibleText(country)
  await browser.pause(3000)


  //Mobile phone
  await myStorePage.ele_mobNumber.waitForExist({timeout : 3000 });
  await (await myStorePage.ele_mobNumber).setValue(mobnumber)
  await browser.pause(3000)

  //Alias address
  await myStorePage.ele_address_alias.waitForExist({timeout : 3000 });
  await (await myStorePage.ele_address_alias).setValue(address)
  await browser.pause(5000)

  //Submit Register

   await myStorePage.btn_Register.waitForClickable({ timeout: 5000 });
  await (await myStorePage.btn_Register).click()
  await browser.pause(5000);



});


Then(/^I should see the correct (.+) and (.+) displayed on the page$/, async function (firstname, lastname) {

  var expected_value = firstname + " " + lastname;
  myStorePage.waitForElementToLoad(await myStorePage.account_name)  
  console.log("Actual value", await myStorePage.account_name.getText())  
  console.log("Expected value is ", expected_value)
  expect(await myStorePage.account_name.getText() === expected_value)
  await browser.pause(5000);

  
});

Then(/^I signIn with the registered user details$/, async function () {


  // Sign out  
  await myStorePage.Signout_link.waitForClickable({ timeout: 5000 });
  await (await myStorePage.Signout_link).click()
  await browser.pause(5000);

  //Sign in with email id and password
  console.log("Mail id is ", emailID_text);
  console.log("Password is ", password_text);

  await myStorePage.user_email_Address.waitForExist({timeout : 3000 });
  await (await myStorePage.user_email_Address).setValue(emailID_text)
  await browser.pause(3000)
  await myStorePage.user_password.waitForExist({timeout : 3000 });
  await (await myStorePage.user_password).clearValue()
  await (await myStorePage.user_password).setValue(password_text)
  await browser.pause(3000)

  //Sign In button
  await myStorePage.btn_SignIn.waitForClickable({ timeout: 5000 });
  await (await myStorePage.btn_SignIn).click()
  await browser.pause(5000);
});


Then(/^I select and add a product to the cart successfully$/, async function () {

  //Clciking women category
  await myStorePage.category_Women.waitForClickable({ timeout: 5000 });
  await (await myStorePage.category_Women).click()
  await browser.pause(5000);



  //Availiability checkbox
  
  await myStorePage.checkbox_Availability.waitForDisplayed({ timeout: 5000 });
  await myStorePage.checkbox_Availability.click()
  await browser.pause(3000);


  //Seleting the first item in the list
 
  //await myStorePage.waitForElementToLoad(await myStorePage.product_list)
  console.log("Total number of Items in Instock", await myStorePage.product_list.length)

  if (await myStorePage.product_list.length >= 1) {
    await myStorePage.product.waitForClickable({ timeout: 5000 });
    await myStorePage.product.click()
    await browser.pause(5000);
  }

  //Get the selected product name Product name
  const product_name_expected = await myStorePage.header.getText();
  console.log("The product name is ", product_name_expected)
  
  //Add to cart
  await myStorePage.add_to_cart.waitForClickable({ timeout: 10000 });
  await (await myStorePage.add_to_cart).click()
  await browser.pause(3000);

  //Success message
  await myStorePage.success_header.waitUntil(async() =>{
    return(await this.getText().trim()) === "Product successfully added to your shopping cart"
  },{
    timeout:5000,
    timeoutMsg: 'Expected message not displayed'
  });
 

  //proceed to Checkout
  await myStorePage.proceedToCheckout.waitForClickable({ timeout: 5000 });
  await (await myStorePage.proceedToCheckout).click()
  await browser.pause(5000);



  //Validte the product name in summary section 
  const productname_summary_actual = await (await myStorePage.product_name_summary).getText()
  expect(productname_summary_actual === product_name_expected)

  //Get the expected price details and proceed checkout
  const product_totalprice_expected = await (await myStorePage.product_totalprice).getText()
  console.log("Expected value of price is ", product_totalprice_expected)  
  await myStorePage.proceedToCheckout.waitForClickable({ timeout: 5000 });
  await (await myStorePage.proceedToCheckout).click()
  await browser.pause(5000);

  //Address section
  await myStorePage.proceedToCheckout_Address.waitForClickable({ timeout: 10000 });
  await (await myStorePage.proceedToCheckout_Address).click()
  await browser.pause(5000);

  //Shipping section-Terms and conditions check
  
  if(await (await myStorePage.terms_checkbox_shipping).isSelected()==false){

    await myStorePage.terms_checkbox_shipping.waitForClickable({ timeout: 5000 });
    await (await myStorePage.terms_checkbox_shipping).click()
  }
  console.log("Is terms and conditions checked", await (await myStorePage.terms_checkbox_shipping).isSelected())
  await browser.pause(5000);

  await myStorePage.proceedToCheckout_Address.waitForClickable({ timeout: 5000 });
  await (await myStorePage.proceedToCheckout_Address).click()
  await browser.pause(5000);

  //Validating the product details in Payment section

  expect(productname_summary_actual === product_name_expected)
  const product_totalprice_actual = await (await myStorePage.product_totalprice).getText()
  console.log("Actual price value displaying is ", product_totalprice_actual)
  expect(product_totalprice_actual === product_totalprice_expected)

});




