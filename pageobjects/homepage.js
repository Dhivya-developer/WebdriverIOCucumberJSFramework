import Page from './page';

class myStorePage extends Page {

  get signIn() { return $('//a[contains(text(),"Sign in")]') }
  get enter_mailId() { return $('[id=email_create]') }
  get btncreate_account() { return $('[id=SubmitCreate]') }

  get f_name() { return $('//input[@id="customer_firstname"]') }
  get l_name() { return $('//input[@id="customer_lastname"]') }
  get ele_password() { return $('//input[@id="passwd"]') }

  get ele_f_name() { return $('//input[@id="firstname"]') }
  get ele_l_name() { return $('//input[@id="lastname"]') }
  get ele_address() { return $('//input[@id="address1"]') }

  get ele_city() { return $('//input[@id="city"]') }
  get ele_state() { return $('//select[@id="id_state"]') }
  get ele_postcode() { return $('//input[@id="postcode"]') }

  get ele_country() { return $('//select[@id="id_country"]') }
  get ele_mobNumber() { return $('//input[@id="phone_mobile"]') }
  get ele_address_alias() { return $('//input[@id="alias"]') }

  get btn_Register() { return $('//button[@id="submitAccount"]') }
  get account_name() { return $('//a[@title="View my customer account"]') }
  get Signout_link() { return $('//a[@title="Log me out"]') }

  get user_email_Address() { return $('//input[@id="email"]') }
  get user_password() { return $('//input[@id="passwd"]') }
  get btn_SignIn() { return $('//button[@id="SubmitLogin"]') }

  get category_Women() { return $('//li/a[@title="Women"]') }
  get checkbox_Availability() { return $('//div[@id="uniform-layered_quantity_1"]') }
  get product_list() { return $$('(//*[@class="product_list grid row"]/li/div)') }

  get product() { return $('(//*[@class="product_list grid row"]/li/div)[2]') }
  get header() { return $('//h1') }

  get add_to_cart() { return $('//*[contains(text(),"Add to cart")]') }
  get success_header() { return $('(//h2)[1]') }

  get proceedToCheckout() { return $('//span[contains(text(),"Proceed to checkout")]') }
  get product_name_summary() { return $('//td[@class="cart_description"]/p/a') }

  get product_totalprice() { return $('//span[@id="total_price"]') }
  get proceedToCheckout_Address() { return $('//button/span[contains(text(),"Proceed to checkout")]') }
  get terms_checkbox_shipping() { return $('//p[contains(text(),"Terms of service")]/following::*/input[@id="cgv"]') }


  async waitForElementToLoad(element) {
    if (!await element.isDisplayed()) {
      await element.waitForDisplayed(10000);
    }
  }


}
export default new myStorePage();