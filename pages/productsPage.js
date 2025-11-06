export class ProductsPage {
  constructor(page) {
    this.page = page;
    this.sortDropdown = page.locator(".product_sort_container");
    this.addToCartButton = page.locator(".inventory_item button").nth(3);
    this.cartIcon = page.locator(".shopping_cart_link");
  }

  async sortProducts(option) {
    await this.sortDropdown.selectOption(option);
  }

  async addFirstProductToCart() {
    await this.addToCartButton.click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }
}