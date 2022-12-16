Feature: Order A product
  As a valid user
  I wanna order a product from an ecommerce website

  Scenario: Order A product
    Given I open the ecommerce website
    When I wanna close the popup
    And I wanna login the web
    And I wanna choose the address shopping
    And I wanna add a product to shopping cart
    And I wanna view shopping cart
    Then I wanna verify the information of added product