package steps;

import Utilities.Driver;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class AmazonTitle_steps {
    @When("user goes to amazon application")
    public void user_goes_to_amazon_application() {
        Driver.getDriver().get("https://amazon.com");
    }

    @Then("user should see proper title")
    public void user_should_see_proper_title() {
        //String title = "Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more";
       // Assert.assertEquals(Driver.getDriver().getTitle(), title);
        Driver.closeDriver();

    }

    @Then("user should validate url")
    public void user_should_validate_url() {
       // Assert.assertTrue(Driver.getDriver().getCurrentUrl().contains("amazon.com"));
        Driver.closeDriver();

    }
}
