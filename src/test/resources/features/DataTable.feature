@data
Feature: Data Table

  Scenario Outline:Data Table test
    Given user on the data table page
    And user clicks on the new button
    Then user should see create new entry box
    And user should enter first name "<firstname>"
    And user should enter last name "<lastname>"
    And user should enter position "<position>"
    And user should enter office "<office>"
    And user should enter extention "<extention>"
    And user should enter date "<date>"
    And user should enter salary "<salary>"
    Then user should click the create button
    And user should enter first name "<firstname>" to search box
    And user should see first name "<firstname>" is inserted in the table

    Examples: Test data for database

      | firstname  |lastname | position  | office  | extention |date       |salary  |
      | henro      |ago      | sdet      | north   | 155       |2019-12-12 |100000  |
      | mike       |hero     | qa        | west    | 200       |2018-01-01 |150000  |
      | erick      |mero     | devop     | london  | 205       |2017-02-09 |120000  |

