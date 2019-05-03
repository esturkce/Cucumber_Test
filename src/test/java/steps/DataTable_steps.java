package steps;

import Pages.DataPage;
import Utilities.Driver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.cucumber.datatable.dependency.com.fasterxml.jackson.annotation.JsonTypeInfo;
import org.junit.Assert;

public class DataTable_steps {

    DataPage dtpg = new DataPage();

    @Given("user on the data table page")
    public void user_on_the_data_table_page() {
        Driver.getDriver().get("https://editor.datatables.net/");
    }

    @Given("user clicks on the new button")
    public void user_clicks_on_the_new_button() {
        dtpg.newButton.click();
    }

    @Then("user should see create new entry box")
    public void user_should_see_create_new_entry_box() throws InterruptedException {
        Thread.sleep(500);
        Assert.assertTrue(dtpg.newEmployeeButton.isDisplayed());
    }

    @Then("user should enter first name {string}")
    public void user_should_enter_first_name(String firstName) {
       dtpg.firstNameInput.sendKeys(firstName);
    }

    @Then("user should enter last name {string}")
    public void user_should_enter_last_name(String lastName) {
        dtpg.lastNameInput.sendKeys(lastName);
    }

    @Then("user should enter position {string}")
    public void user_should_enter_position(String position) {
       dtpg.positionInput.sendKeys(position);
    }

    @Then("user should enter office {string}")
    public void user_should_enter_office(String office) {
        dtpg.officeInput.sendKeys(office);
    }

    @Then("user should enter extention {string}")
    public void user_should_enter_extention(String extention) {
        dtpg.extentionInput.sendKeys(extention);
    }

    @Then("user should enter date {string}")
    public void user_should_enter_date(String date) {
        dtpg.startDateInput.sendKeys(date);
    }

    @Then("user should enter salary {string}")
    public void user_should_enter_salary(String salary) {
       dtpg.salaryInput.sendKeys(salary);
    }


    @Then("user should click the create button")
    public void user_should_click_the_create_button() {
        dtpg.createButton.click();

    }

    @Then("user should enter first name {string} to search box")
    public void user_should_enter_first_name_to_search_box(String name) {
        dtpg.searchBox.sendKeys(name);
    }

    @Then("user should see first name {string} is inserted in the table")
    public void user_should_see_first_name_is_inserted_in_the_table(String expectedName) {
        String expected = expectedName;
        String actual = dtpg.firstResult.getText();


        Assert.assertTrue(actual.contains(expected));
    }


}
