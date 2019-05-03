Feature:

  @wip
  Scenario: Wikipedia search test
    Given User is on the Wikipedia home page
    When user enters steve jobs on the search box
    Then user should see first header is displaying steve jobs

