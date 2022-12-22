Feature: practice-form
  As a valid user
  I wanna fill to form and verify field filled

  Scenario:  Fill to form and verify field filled
#    Given I open the website: 'https://demoqa.com/automation-practice-form'
    Given I open the demoqa praticeForm
    When I wanna fill to the field text
      | field      | value              |
      | firstName  | Nghia              |
      | lastName   | Ngo                |
      | userEmail  | ngonghia@gmail.com |
      | userNumber | 0123456789         |
      | currentAddress | abc abc         |
    And I wanna select to the option
      | field     | value |
      | gender | Male |
    And I wanna select "English" on subjects
    When I wanna select the hobbies checkbox
     | value              |
    | Sports              |
      | Reading                |


    And I wanna select "23 Jun 1995" on DOB

    And I wanna select "NCR" on state
