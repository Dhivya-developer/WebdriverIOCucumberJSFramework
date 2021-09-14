Feature: Automation practice website page

    @test
    Scenario Outline: As a user, I register on the website and order a product for purchase

        Given I am on Automation practice website page <URL>
        And I signIn and create an account
        When I enter personal information details <Firstname>,<Lastname>,<password>,<Address>,<city>,<State>,<ZipCode>,<Country>,<mob_number>
        Then I should see the correct <Firstname> and <Lastname> displayed on the page
        And I signIn with the registered user details
        And I select and add a product to the cart successfully
        
        Examples:
            | URL                                     | Firstname | Lastname | password | Address              | city   | State   | ZipCode | Country       | mob_number  |
            | http://automationpractice.com/index.php | Test      | User     | Test123  | SantaStreetColonyabc | London | Alabama | 87534   | United States | 08763456789 |
