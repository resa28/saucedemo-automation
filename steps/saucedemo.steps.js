import { Given, When, Then, BeforeAll, AfterAll } from "@cucumber/cucumber";
import { chromium } from "@playwright/test";
import { LoginPage } from "../pages/loginPage.js";
import { ProductsPage } from "../pages/productsPage.js";
import { CheckoutPage } from "../pages/checkoutPage.js";
import assert from "assert";

let browser, page, loginPage, productsPage, checkoutPage;

// buka browser sekali di awal semua scenario
BeforeAll(async () => {
  browser = await chromium.launch({ headless: false, slowMo: 200 });
  page = await browser.newPage();
  loginPage = new LoginPage(page);
  productsPage = new ProductsPage(page);
  checkoutPage = new CheckoutPage(page);
});

// tutup browser setelah semua selesai
AfterAll(async () => {
  await browser.close();
});

Given("I am logged in to SauceDemo", async function () {
  await loginPage.open();
  await loginPage.login();
});

When("I sort products by {string}", async function (optionText) {
  await productsPage.sortProducts(optionText);
});

Then("products should be sorted from lowest to highest price", async function () {
  const prices = await page.$$eval(".inventory_item_price", els =>
    els.map(el => parseFloat(el.textContent.replace("$", "")))
  );
  const sorted = [...prices].sort((a, b) => a - b);
  assert.deepStrictEqual(prices, sorted);
});

When("I add a product to the cart", async function () {
  await productsPage.addFirstProductToCart();
  await productsPage.goToCart();
});

When("I proceed to checkout", async function () {
  await checkoutPage.proceedToCheckout();
});

When("I fill in my checkout information", async function () {
  await checkoutPage.fillCheckoutInfo("Latif", "Arif", "12345");
  await checkoutPage.finishCheckout();
});

Then("I should see the success message {string}", async function (message) {
  const text = await checkoutPage.verifySuccess();
  assert.strictEqual(text.trim(), message);
});
