Feature: date keeper
  As a valid user
  I wanna select date on calender

  Scenario: Select date on calender
    Given I open the dateKeeper website
    When I wanna select the DateKeeper
    And I wanna get month different from "23 Jun 1995" with current date
    And I wanna select the date chosen

