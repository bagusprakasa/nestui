import * as element from "@helpers/elements";
import * as route from "@helpers/routes";
import { ROUTES } from "@test/const/routes";
import * as loginPage from "@test/pages/login.page";
import * as asssert from "@helpers/asssert";

beforeEach(() => {
  route.visit(ROUTES.login);
});
describe("Login test", () => {
  it("User login with data invalid", () => {
    element.fillField(loginPage.userNameField, "asd");
    element.fillField(loginPage.passwordField, "secret_sauce");
    element.click(loginPage.loginButton);

    asssert.shouldBeVisible(loginPage.errorMessage);
    asssert.shouldContainText(
      loginPage.errorMessage,
      "Epic sadface: Username and password do not match any user in this service"
    );
  });
});
