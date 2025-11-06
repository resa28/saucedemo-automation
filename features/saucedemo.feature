Feature: SauceDemo Product Purchase Flow

  Scenario: Sort products by price (low to high)
    Given I am logged in to SauceDemo
    When I sort products by "Price (low to high)"
    Then products should be sorted from lowest to highest price

  Scenario: Complete checkout process
    Given I am logged in to SauceDemo
    When I add a product to the cart
    And I proceed to checkout
    And I fill in my checkout information
    Then I should see the success message "Thank you for your order!"
