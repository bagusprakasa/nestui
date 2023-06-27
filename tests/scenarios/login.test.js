import * as element from "@helpers/elements";
import * as route from "@helpers/route";
import { ROUTES } from "@tests/const/routes";
import * as loginPage from "@tests/pages/login.page";
import * as assert from "@helpers/assert";

beforeEach(() => {
  route.visit(ROUTES.login);
});
describe("Login test", () => {
  it("User login with data invalid", () => {
    element.fillFilled(loginPage.userNameField, "asd");
    element.fillFilled(loginPage.passwordField, "secret_sauce");
    element.click(loginPage.loginButton);

    assert.shouldBeVisible(loginPage.errorMessage);
    assert.shouldContainText(
      loginPage.errorMessage,
      "Epic sadface: Username and password do not match any user in this service"
    );
  });
});
