Feature: register login
  As a valid user
  I wanna register and login

  Scenario Outline: Register and login
    Given I open the demo.nopcommerce website
    When I wanna register
    And I wanna select "male" for gender
    And I wanna fill to the field text on demo.nopcommerce website
      | field           | value             |
      | FirstName       | <FirstName>       |
      | LastName        | <LastName>        |
      | Email           | <Email>           |
      | Company         | <Company>         |
      | Password        | <Password>        |
      | ConfirmPassword | <ConfirmPassword> |
    And I wanna select DOB "23 Jun 1995" on demo.nopcommerce website
    When I wanna confirm register
    And I wanna login from main page demo.nopcommerce website
    And I wanna fill to the field text on demo.nopcommerce website
      | field    | value      |
      | Email    | <Email>    |
      | Password | <Password> |
    And I wanna login
    Examples:
      | FirstName | LastName | Email    | Company | Password   | ConfirmPassword |
      | Nghia     | Ngo      | ngonghia | CMC     | Abc@abc123 | Abc@abc123      |
