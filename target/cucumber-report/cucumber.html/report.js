$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DesktopPage.feature");
formatter.feature({
  "line": 1,
  "name": "Desktop page test",
  "description": "\r\nAs a user I want to check desktop page and add product into cart",
  "id": "desktop-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7344925100,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 8,
  "name": "User should arrange product in alphabetical order successfully",
  "description": "",
  "id": "desktop-page-test;user-should-arrange-product-in-alphabetical-order-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@sanity"
    },
    {
      "line": 7,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I mouse hover and click on desktop tab",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on show all desktops",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on sort by position",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select product sort by \"Name (Z - A)\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see product arrange in alphabetical order successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iMouseHoverAndClickOnDesktopTab()"
});
formatter.result({
  "duration": 1513048900,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnShowAllDesktops()"
});
formatter.result({
  "duration": 710891300,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnSortByPosition()"
});
formatter.result({
  "duration": 109097000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (Z - A)",
      "offset": 26
    }
  ],
  "location": "DesktopPageSteps.iSelectProductSortBy(String)"
});
formatter.result({
  "duration": 624814700,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iShouldSeeProductArrangeInAlphabeticalOrderSuccessfully()"
});
formatter.result({
  "duration": 736246700,
  "status": "passed"
});
formatter.after({
  "duration": 740029600,
  "status": "passed"
});
formatter.before({
  "duration": 5537243700,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 16,
  "name": "User should add product to shopping cart successfully",
  "description": "",
  "id": "desktop-page-test;user-should-add-product-to-shopping-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@smoke"
    },
    {
      "line": 15,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I mouse hover and click on desktop tab",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click on show all desktops",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select currency \"£Pound Sterling\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select product sort by \"Name (A - Z)\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select product \"HP LP3065\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should navigate to \"HP LP3065\" product page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I select date \"2022\",\"November\",\"30\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I add quantity \"1\" for product",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see product added successfully message",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I click on shopping cart button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should see shopping cart text",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I should see \"HP LP3065\" product name",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see \"2022-11-30\" delivery date",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I should see \"Product 21\" model name",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should see total price",
  "keyword": "And "
});
formatter.match({
  "location": "TopMenuSteps.iMouseHoverAndClickOnDesktopTab()"
});
formatter.result({
  "duration": 716546600,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnShowAllDesktops()"
});
formatter.result({
  "duration": 483783200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£Pound Sterling",
      "offset": 19
    }
  ],
  "location": "DesktopPageSteps.iSelectCurrency(String)"
});
formatter.result({
  "duration": 746821600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (A - Z)",
      "offset": 26
    }
  ],
  "location": "DesktopPageSteps.iSelectProductSortBy(String)"
});
formatter.result({
  "duration": 473965900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP LP3065",
      "offset": 18
    }
  ],
  "location": "DesktopPageSteps.iSelectProduct(String)"
});
formatter.result({
  "duration": 1596559500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP LP3065",
      "offset": 22
    }
  ],
  "location": "DesktopPageSteps.iShouldNavigateToProductPage(String)"
});
formatter.result({
  "duration": 62415500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022",
      "offset": 15
    },
    {
      "val": "November",
      "offset": 22
    },
    {
      "val": "30",
      "offset": 33
    }
  ],
  "location": "DesktopPageSteps.iSelectDate(String,String,String)"
});
formatter.result({
  "duration": 8548343300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "DesktopPageSteps.iAddQuantityForProduct(String)"
});
formatter.result({
  "duration": 148119400,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 734715700,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iShouldSeeProductAddedSuccessfullyMessage()"
});
formatter.result({
  "duration": 563477500,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnShoppingCartButton()"
});
formatter.result({
  "duration": 1094348700,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iShouldSeeShoppingCartText()"
});
formatter.result({
  "duration": 60486000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP LP3065",
      "offset": 14
    }
  ],
  "location": "DesktopPageSteps.iShouldSeeProductName(String)"
});
formatter.result({
  "duration": 33320300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022-11-30",
      "offset": 14
    }
  ],
  "location": "DesktopPageSteps.iShouldSeeDeliveryDate(String)"
});
formatter.result({
  "duration": 42315600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product 21",
      "offset": 14
    }
  ],
  "location": "DesktopPageSteps.iShouldSeeModelName(String)"
});
formatter.result({
  "duration": 33488900,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iShouldSeeTotalPrice()"
});
formatter.result({
  "duration": 35591100,
  "status": "passed"
});
formatter.after({
  "duration": 746946200,
  "status": "passed"
});
formatter.uri("LaptopAndNotebookPage.feature");
formatter.feature({
  "line": 1,
  "name": "Laptop And Notebook Page Test",
  "description": "\r\nAs a user I want to check functionality of laptop and notebook page",
  "id": "laptop-and-notebook-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5235813000,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 8,
  "name": "User should arrange product in price high to low order successfully",
  "description": "",
  "id": "laptop-and-notebook-page-test;user-should-arrange-product-in-price-high-to-low-order-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@sanity"
    },
    {
      "line": 7,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I mouse hover and click on laptop and notebook tab",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on show all laptop and notebook",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on sort by position",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select product sort by \"Price (High \u003e Low)\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see product arrange in price high to low order successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iMouseHoverAndClickOnLaptopAndNotebookTab()"
});
formatter.result({
  "duration": 827706200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iClickOnShowAllLaptopAndNotebook()"
});
formatter.result({
  "duration": 562503300,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnSortByPosition()"
});
formatter.result({
  "duration": 88707000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (High \u003e Low)",
      "offset": 26
    }
  ],
  "location": "DesktopPageSteps.iSelectProductSortBy(String)"
});
formatter.result({
  "duration": 556710300,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iShouldSeeProductArrangeInPriceHighToLowOrderSuccessfully()"
});
formatter.result({
  "duration": 209934400,
  "status": "passed"
});
formatter.after({
  "duration": 749408000,
  "status": "passed"
});
formatter.before({
  "duration": 4800200900,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 16,
  "name": "User should place order successfully",
  "description": "",
  "id": "laptop-and-notebook-page-test;user-should-place-order-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@smoke"
    },
    {
      "line": 15,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I mouse hover and click on laptop and notebook tab",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click on show all laptop and notebook",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select currency \"£Pound Sterling\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select product sort by \"Price (High \u003e Low)\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select product \"Macbook\" from laptop and notebook page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should navigate to \"MacBook\" product",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should see product macbook added successfully message",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I click on shopping cart button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see shopping cart text",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I should see \"MacBook\" product",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I change quantity \"2\" for product",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on update quantity",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see cart modified message",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I should see total price for macbook products",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should navigate to checkout page",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I should see new customer text",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on guest checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on continue button of guest checkout page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I filled all mandatory field of checkout page",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click on continue after fill all detail on checkout page",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I add comments to text area about product order",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click checkbox of terms and condition",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on continue of checkout",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I should see warning message regarding Payment method",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iMouseHoverAndClickOnLaptopAndNotebookTab()"
});
formatter.result({
  "duration": 4651728300,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iClickOnShowAllLaptopAndNotebook()"
});
formatter.result({
  "duration": 460232600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£Pound Sterling",
      "offset": 19
    }
  ],
  "location": "DesktopPageSteps.iSelectCurrency(String)"
});
formatter.result({
  "duration": 649185300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (High \u003e Low)",
      "offset": 26
    }
  ],
  "location": "DesktopPageSteps.iSelectProductSortBy(String)"
});
formatter.result({
  "duration": 537696400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Macbook",
      "offset": 18
    }
  ],
  "location": "LaptopAndNotebookPageSteps.iSelectProductFromLaptopAndNotebookPage(String)"
});
formatter.result({
  "duration": 1967050500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MacBook",
      "offset": 22
    }
  ],
  "location": "LaptopAndNotebookPageSteps.iShouldNavigateToProduct(String)"
});
formatter.result({
  "duration": 64734200,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 694450200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iShouldSeeProductMacbookAddedSuccessfullyMessage()"
});
formatter.result({
  "duration": 557703600,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnShoppingCartButton()"
});
formatter.result({
  "duration": 1053105100,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iShouldSeeShoppingCartText()"
});
formatter.result({
  "duration": 49883300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MacBook",
      "offset": 14
    }
  ],
  "location": "LaptopAndNotebookPageSteps.iShouldSeeProduct(String)"
});
formatter.result({
  "duration": 47317800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    }
  ],
  "location": "LaptopAndNotebookPageSteps.iChangeQuantityForProduct(String)"
});
formatter.result({
  "duration": 159225800,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iClickOnUpdateQuantity()"
});
formatter.result({
  "duration": 626328700,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iShouldSeeCartModifiedMessage()"
});
formatter.result({
  "duration": 36218300,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iShouldSeeTotalPriceForMacbookProducts()"
});
formatter.result({
  "duration": 29864000,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iClickOnCheckoutButton()"
});
formatter.result({
  "duration": 443755200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iShouldNavigateToCheckoutPage()"
});
formatter.result({
  "duration": 35585500,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iShouldSeeNewCustomerText()"
});
formatter.result({
  "duration": 543677000,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iClickOnGuestCheckoutButton()"
});
formatter.result({
  "duration": 593930100,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iClickOnContinueButtonOfGuestCheckoutPage()"
});
formatter.result({
  "duration": 74204400,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iFilledAllMandatoryFieldOfCheckoutPage()"
});
formatter.result({
  "duration": 1649105700,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iClickOnContinueAfterFillAllDetailOnCheckoutPage()"
});
formatter.result({
  "duration": 173689600,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iAddCommentsToTextAreaAboutProductOrder()"
});
formatter.result({
  "duration": 668726700,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iClickCheckboxOfTermsAndCondition()"
});
formatter.result({
  "duration": 1070934400,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iClickOnContinueOfCheckout()"
});
formatter.result({
  "duration": 1102406300,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iShouldSeeWarningMessageRegardingPaymentMethod()"
});
formatter.result({
  "duration": 1035221800,
  "status": "passed"
});
formatter.after({
  "duration": 755423100,
  "status": "passed"
});
formatter.uri("LoginPage.feature");
formatter.feature({
  "line": 1,
  "name": "Login Page Test",
  "description": "\r\nAs a user I want to check login/logout functionality",
  "id": "login-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4868297000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 7,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-page-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@sanity"
    },
    {
      "line": 6,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I click on my account link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I select \"Login\" option from my account options",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 103753500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 10
    }
  ],
  "location": "LoginPageSteps.iSelectOptionFromMyAccountOptions(String)"
});
formatter.result({
  "duration": 453345400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 48895300,
  "status": "passed"
});
formatter.after({
  "duration": 787148200,
  "status": "passed"
});
formatter.before({
  "duration": 4679671700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 13,
  "name": "User should login and logout successfully",
  "description": "",
  "id": "login-page-test;user-should-login-and-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@smoke"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I click on my account link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I select \"Login\" option from my account options",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter email \"iampatel@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter password \"HelloNum1\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I click on my account link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select \"Logout\" option from my account options",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should logout successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 102637300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 10
    }
  ],
  "location": "LoginPageSteps.iSelectOptionFromMyAccountOptions(String)"
});
formatter.result({
  "duration": 443938300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iampatel@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginPageSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 178221900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HelloNum1",
      "offset": 18
    }
  ],
  "location": "LoginPageSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 111546500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 628324400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 38562400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 55618000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 10
    }
  ],
  "location": "LoginPageSteps.iSelectOptionFromMyAccountOptions(String)"
});
formatter.result({
  "duration": 607982900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iShouldLogoutSuccessfully()"
});
formatter.result({
  "duration": 31892000,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 416270900,
  "status": "passed"
});
formatter.after({
  "duration": 776916800,
  "status": "passed"
});
formatter.uri("RegisterPage.feature");
formatter.feature({
  "line": 1,
  "name": "Register Page Test",
  "description": "\r\nAs a user i want to do registration into tutorial ninja website",
  "id": "register-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4999904300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 7,
  "name": "User should navigate to register page successfully",
  "description": "",
  "id": "register-page-test;user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@sanity"
    },
    {
      "line": 6,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I click on my account link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I select \"Register\" option from my account options",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should navigate to register page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 105067200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 10
    }
  ],
  "location": "LoginPageSteps.iSelectOptionFromMyAccountOptions(String)"
});
formatter.result({
  "duration": 723627200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iShouldNavigateToRegisterPageSuccessfully()"
});
formatter.result({
  "duration": 36792500,
  "status": "passed"
});
formatter.after({
  "duration": 762069900,
  "status": "passed"
});
formatter.before({
  "duration": 5067302100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 13,
  "name": "User should register account successfully",
  "description": "",
  "id": "register-page-test;user-should-register-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@smoke"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I click on my account link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I select \"Register\" option from my account options",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I filled all mandatory field of registration",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on continue button of registration page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see account successfully created message",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I click on continue",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on my account link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select \"Logout\" option from my account options",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should logout successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 97525400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 10
    }
  ],
  "location": "LoginPageSteps.iSelectOptionFromMyAccountOptions(String)"
});
formatter.result({
  "duration": 711058200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iFilledAllMandatoryFieldOfRegistration()"
});
formatter.result({
  "duration": 771186400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnContinueButtonOfRegistrationPage()"
});
formatter.result({
  "duration": 1197170400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iShouldSeeAccountSuccessfullyCreatedMessage()"
});
formatter.result({
  "duration": 45334900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnContinue()"
});
formatter.result({
  "duration": 374184900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 70443300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 10
    }
  ],
  "location": "LoginPageSteps.iSelectOptionFromMyAccountOptions(String)"
});
formatter.result({
  "duration": 622669900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iShouldLogoutSuccessfully()"
});
formatter.result({
  "duration": 32649000,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 418071100,
  "status": "passed"
});
formatter.after({
  "duration": 722682800,
  "status": "passed"
});
formatter.uri("TopMenu.feature");
formatter.feature({
  "line": 1,
  "name": "Top Menu test of Homepage",
  "description": "\r\nAs a user I want to check top menu tab options on Homepage",
  "id": "top-menu-test-of-homepage",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5347195500,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 8,
  "name": "User should navigate to desktop page successfully",
  "description": "",
  "id": "top-menu-test-of-homepage;user-should-navigate-to-desktop-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@sanity"
    },
    {
      "line": 7,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I mouse hover and click on desktop tab",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I select menu \"Show All Desktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should navigate to desktop page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iMouseHoverAndClickOnDesktopTab()"
});
formatter.result({
  "duration": 728648500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show All Desktops",
      "offset": 15
    }
  ],
  "location": "TopMenuSteps.iSelectMenu(String)"
});
formatter.result({
  "duration": 20014944400,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iShouldNavigateToDesktopPageSuccessfully()"
});
formatter.result({
  "duration": 46806900,
  "status": "passed"
});
formatter.after({
  "duration": 773339800,
  "status": "passed"
});
formatter.before({
  "duration": 4669283700,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 14,
  "name": "User should navigate to laptop and notebook page successfully",
  "description": "",
  "id": "top-menu-test-of-homepage;user-should-navigate-to-laptop-and-notebook-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@smoke"
    },
    {
      "line": 13,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I mouse hover and click on laptop and notebook tab",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I select menu \"Show All Laptops \u0026 Notebooks\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should navigate to laptop and notebook page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iMouseHoverAndClickOnLaptopAndNotebookTab()"
});
formatter.result({
  "duration": 686534400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show All Laptops \u0026 Notebooks",
      "offset": 15
    }
  ],
  "location": "TopMenuSteps.iSelectMenu(String)"
});
formatter.result({
  "duration": 20048033100,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iShouldNavigateToLaptopAndNotebookPageSuccessfully()"
});
formatter.result({
  "duration": 62270500,
  "status": "passed"
});
formatter.after({
  "duration": 780377800,
  "status": "passed"
});
formatter.before({
  "duration": 4965298100,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 20,
  "name": "User should navigate to component page successfully",
  "description": "",
  "id": "top-menu-test-of-homepage;user-should-navigate-to-component-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I mouse hover and click on component tab",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I select menu \"Show All Components\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should navigate to component page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iMouseHoverAndClickOnComponentTab()"
});
formatter.result({
  "duration": 15292121700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show All Components",
      "offset": 15
    }
  ],
  "location": "TopMenuSteps.iSelectMenu(String)"
});
formatter.result({
  "duration": 20050394300,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iShouldNavigateToComponentPageSuccessfully()"
});
formatter.result({
  "duration": 61755300,
  "status": "passed"
});
formatter.after({
  "duration": 734675900,
  "status": "passed"
});
});