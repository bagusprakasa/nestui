import * as element from "@helpers/elements";
import * as route from "@helpers/route";
import { ROUTES } from "@tests/const/routes";
import * as loginPage from "@tests/pages/login.page";
import * as homePage from "@tests/pages/home.page";
import * as assert from "@helpers/assert";
import * as data from "@tests/data/login.data";

beforeEach(() => {
  route.visit(ROUTES.login);
});
describe("Login test", () => {
  it("User login with data invalid", () => {
    element.fillFilled(loginPage.userNameField, data.INVALID_LOGIN.username);
    element.fillFilled(loginPage.passwordField, data.INVALID_LOGIN.password);
    element.click(loginPage.loginButton);

    assert.shouldBeVisible(loginPage.errorMessage);
    assert.shouldContainText(
      loginPage.errorMessage,
      "Epic sadface: Username and password do not match any user in this service"
    );
  });
  it("User login with data valid", () => {
    element.fillFilled(loginPage.userNameField, data.VALID_LOGIN.username);
    element.fillFilled(loginPage.passwordField, data.VALID_LOGIN.password);
    element.click(loginPage.loginButton);
    assert.shouldContainText(homePage.title, "Products");
  });
});
