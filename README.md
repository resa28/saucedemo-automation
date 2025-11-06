# SauceDemo Automation

A comprehensive UI automation framework for SauceDemo e-commerce website using Playwright and Cucumber.js with BDD (Behavior-Driven Development) approach.

## 🚀 Features

- **BDD Framework**: Uses Cucumber.js for behavior-driven development
- **Modern Automation**: Powered by Playwright for reliable browser automation
- **Page Object Model**: Clean and maintainable test architecture
- **Multiple Scenarios**: Covers key e-commerce user journeys
- **Detailed Reports**: JSON-based test reporting with step-by-step execution details

## 📋 Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd saucedemo-automation
```

2. Install dependencies:
```bash
npm install
```

## 📁 Project Structure

```
saucedemo-automation/
├── features/
│   └── saucedemo.feature        # Test scenarios written in Gherkin
├── steps/
│   └── saucedemo.steps.js       # Step definitions implementation
├── pages/
│   ├── loginPage.js             # Login page interactions
│   ├── inventoryPage.js         # Product listing page
│   └── checkoutPage.js          # Checkout process page
├── reports/
│   └── cucumber_report.json     # Test execution reports
├── package.json                 # Project dependencies and scripts
└── README.md                    # This file
```

## 🧪 Test Scenarios

### 1. Sort Products by Price (Low to High)
- Logs in to SauceDemo
- Sorts products by price from lowest to highest
- Verifies products are correctly sorted

### 2. Complete Checkout Process
- Logs in to SauceDemo
- Adds a product to cart
- Proceeds through checkout flow
- Fills in checkout information
- Verifies order completion

## 🏃‍♂️ Running Tests

Execute all tests:
```bash
npm test
```

This will run all Cucumber scenarios and generate a detailed report in `reports/cucumber_report.json`.

## 📊 Test Reports

After test execution, detailed reports are available in:
- `reports/cucumber_report.json` - JSON format with step-by-step execution details

## 🔧 Configuration

The project uses the following key technologies:
- **Cucumber.js**: BDD test framework
- **Playwright**: Browser automation library
- **Node.js**: Runtime environment

## 📝 Test Data

Default test credentials:
- **Username**: standard_user (configured in step definitions)
- **Password**: secret_sauce (configured in step definitions)

Default checkout information:
- **First Name**: Resa
- **Last Name**: NS
- **Postal Code**: 12345

## 🐛 Troubleshooting

### Common Issues

1. **Node.js Version Compatibility**
   - Ensure you're using Node.js v18 or higher
   - Update npm: `npm install -g npm@latest`

2. **Browser Issues**
   - Playwright automatically handles browser setup
   - Ensure system has necessary browser dependencies

3. **Test Failures**
   - Check test reports for detailed failure information
   - Verify SauceDemo website is accessible

## 🤝 Contributing

1. Create a feature branch
2. Write test scenarios in Gherkin format
3. Implement step definitions
4. Run tests to ensure functionality
5. Update documentation as needed
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🔗 Links

- [SauceDemo Website](https://www.saucedemo.com/)
- [Cucumber.js Documentation](https://cucumber.io/docs/cucumber-js/)
- [Playwright Documentation](https://playwright.dev/)

## 📈 Test Results

Latest test execution:
- ✅ 2 scenarios passed
- ✅ 8 steps passed
- ⏱️ Average execution time: ~6 seconds