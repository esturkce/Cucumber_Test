Feature: This is my first Feature
  # this is comment
  @google
  Scenario: Google search scenario
    When user goes to google application
    Then user searches for "apple"
    And user should see apple related results
    And user tests something
