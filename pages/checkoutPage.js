export class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.checkoutButton = page.locator("#checkout");
    this.firstName = page.locator("#first-name");
    this.lastName = page.locator("#last-name");
    this.postalCode = page.locator("#postal-code");
    this.continueButton = page.locator("#continue");
    this.finishButton = page.locator("#finish");
    this.successMessage = page.locator(".complete-header");
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }

  async fillCheckoutInfo(first, last, postal) {
    await this.firstName.fill(first);
    await this.lastName.fill(last);
    await this.postalCode.fill(postal);
    await this.continueButton.click();
  }

  async finishCheckout() {
    await this.finishButton.click();
  }

  async verifySuccess() {
    await this.successMessage.waitFor();
    return await this.successMessage.textContent();
  }
}