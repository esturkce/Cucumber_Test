package steps;

import Pages.WikiPage;
import Utilities.Driver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.Keys;

public class Wiki_steps {
    WikiPage wkp = new WikiPage();

    @Given("User is on the Wikipedia home page")
    public void user_is_on_the_Wikipedia_home_page() {
        Driver.getDriver().get("https://www.wikipedia.org/");
    }

    @When("user enters steve jobs on the search box")
    public void user_enters_steve_jobs_on_the_search_box() {
        wkp.wikiSearchBOx.sendKeys("steve jobs" + Keys.ENTER);

    }

    @Then("user should see first header is displaying steve jobs")
    public void user_should_see_first_header_is_displaying_steve_jobs() {
        String actaul = wkp.firstHeader.getText();
        String expected = "steve jobs";

        Assert.assertTrue(actaul.equals(expected));


    }
}
