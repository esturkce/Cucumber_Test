$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/DataTable.feature");
formatter.feature({
  "name": "Data Table",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@data"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Data Table test",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user on the data table page",
  "keyword": "Given "
});
formatter.step({
  "name": "user clicks on the new button",
  "keyword": "And "
});
formatter.step({
  "name": "user should see create new entry box",
  "keyword": "Then "
});
formatter.step({
  "name": "user should enter first name \"\u003cfirstname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user should enter last name \"\u003clastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user should enter position \"\u003cposition\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user should enter office \"\u003coffice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user should enter extention \"\u003cextention\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user should enter date \"\u003cdate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user should enter salary \"\u003csalary\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user should click the create button",
  "keyword": "Then "
});
formatter.step({
  "name": "user should enter first name \"\u003cfirstname\u003e\" to search box",
  "keyword": "And "
});
formatter.step({
  "name": "user should see first name \"\u003cfirstname\u003e\" is inserted in the table",
  "keyword": "And "
});
formatter.examples({
  "name": "Test data for database",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "position",
        "office",
        "extention",
        "date",
        "salary"
      ]
    },
    {
      "cells": [
        "henro",
        "ago",
        "sdet",
        "north",
        "155",
        "2019-12-12",
        "100000"
      ]
    },
    {
      "cells": [
        "mike",
        "hero",
        "qa",
        "west",
        "200",
        "2018-01-01",
        "150000"
      ]
    },
    {
      "cells": [
        "erick",
        "mero",
        "devop",
        "london",
        "205",
        "2017-02-09",
        "120000"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Data Table test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@data"
    }
  ]
});
formatter.step({
  "name": "user on the data table page",
  "keyword": "Given "
});
formatter.match({
  "location": "DataTable_steps.user_on_the_data_table_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the new button",
  "keyword": "And "
});
formatter.match({
  "location": "DataTable_steps.user_clicks_on_the_new_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see create new entry box",
  "keyword": "Then "
});
formatter.match({
  "location": "DataTable_steps.user_should_see_create_new_entry_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter first name \"henro\"",
  "keyword": "And "
});
formatter.match({
  "location": "DataTable_steps.user_should_enter_first_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter last name \"ago\"",
  "keyword": "And "
});
formatter.match({
  "location": "DataTable_steps.user_should_enter_last_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter position \"sdet\"",
  "keyword": "And "
});
formatter.match({
  "location": "DataTable_steps.user_should_enter_position(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter office \"north\"",
  "keyword": "And "
});
formatter.match({
  "location": "DataTable_steps.user_should_enter_office(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter extention \"155\"",
  "keyword": "And "
});
formatter.match({
  "location": "DataTable_steps.user_should_enter_extention(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter date \"2019-12-12\"",
  "keyword": "And "
});
formatter.match({
  "location": "DataTable_steps.user_should_enter_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter salary \"100000\"",
  "keyword": "And "
});
formatter.match({
  "location": "DataTable_steps.user_should_enter_salary(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click the create button",
  "keyword": "Then "
});
formatter.match({
  "location": "DataTable_steps.user_should_click_the_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter first name \"henro\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "DataTable_steps.user_should_enter_first_name_to_search_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see first name \"henro\" is inserted in the table",
  "keyword": "And "
});
formatter.match({
  "location": "DataTable_steps.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Data Table test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@data"
    }
  ]
});
formatter.step({
  "name": "user on the data table page",
  "keyword": "Given "
});
formatter.match({
  "location": "DataTable_steps.user_on_the_data_table_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the new button",
  "keyword": "And "
});
formatter.match({
  "location": "DataTable_steps.user_clicks_on_the_new_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see create new entry box",
  "keyword": "Then "
});
formatter.match({
  "location": "DataTable_steps.user_should_see_create_new_entry_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter first name \"mike\"",
  "keyword": "And "
});
formatter.match({
  "location": "DataTable_steps.user_should_enter_first_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter last name \"hero\"",
  "keyword": "And "
});
formatter.match({
  "location": "DataTable_steps.user_should_enter_last_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter position \"qa\"",
  "keyword": "And "
});
formatter.match({
  "location": "DataTable_steps.user_should_enter_position(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter office \"west\"",
  "keyword": "And "
});
formatter.match({
  "location": "DataTable_steps.user_should_enter_office(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter extention \"200\"",
  "keyword": "And "
});
formatter.match({
  "location": "DataTable_steps.user_should_enter_extention(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter date \"2018-01-01\"",
  "keyword": "And "
});
formatter.match({
  "location": "DataTable_steps.user_should_enter_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter salary \"150000\"",
  "keyword": "And "
});
formatter.match({
  "location": "DataTable_steps.user_should_enter_salary(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click the create button",
  "keyword": "Then "
});
formatter.match({
  "location": "DataTable_steps.user_should_click_the_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter first name \"mike\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "DataTable_steps.user_should_enter_first_name_to_search_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see first name \"mike\" is inserted in the table",
  "keyword": "And "
});
formatter.match({
  "location": "DataTable_steps.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Data Table test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@data"
    }
  ]
});
formatter.step({
  "name": "user on the data table page",
  "keyword": "Given "
});
formatter.match({
  "location": "DataTable_steps.user_on_the_data_table_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the new button",
  "keyword": "And "
});
formatter.match({
  "location": "DataTable_steps.user_clicks_on_the_new_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see create new entry box",
  "keyword": "Then "
});
formatter.match({
  "location": "DataTable_steps.user_should_see_create_new_entry_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter first name \"erick\"",
  "keyword": "And "
});
formatter.match({
  "location": "DataTable_steps.user_should_enter_first_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter last name \"mero\"",
  "keyword": "And "
});
formatter.match({
  "location": "DataTable_steps.user_should_enter_last_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter position \"devop\"",
  "keyword": "And "
});
formatter.match({
  "location": "DataTable_steps.user_should_enter_position(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter office \"london\"",
  "keyword": "And "
});
formatter.match({
  "location": "DataTable_steps.user_should_enter_office(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter extention \"205\"",
  "keyword": "And "
});
formatter.match({
  "location": "DataTable_steps.user_should_enter_extention(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter date \"2017-02-09\"",
  "keyword": "And "
});
formatter.match({
  "location": "DataTable_steps.user_should_enter_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter salary \"120000\"",
  "keyword": "And "
});
formatter.match({
  "location": "DataTable_steps.user_should_enter_salary(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click the create button",
  "keyword": "Then "
});
formatter.match({
  "location": "DataTable_steps.user_should_click_the_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter first name \"erick\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "DataTable_steps.user_should_enter_first_name_to_search_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see first name \"erick\" is inserted in the table",
  "keyword": "And "
});
formatter.match({
  "location": "DataTable_steps.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});