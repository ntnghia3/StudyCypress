Feature: date keeper
  As a valid user
  I wanna select date on calender

  Scenario: Select date on calender
#    Given I open the website: 'https://demo.automationtesting.in/Datepicker.html'
    Given I open the dateKeeper website
    When I wanna select the DateKeeper
#    And I wanna select "23 Jun 2021" on DateKeeper
    And I wanna get month different from "23 Jun 2021" with current date
    And I wanna test

