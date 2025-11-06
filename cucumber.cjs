module.exports = {
  default: {
    require: ["./steps/*.js",
        //  "./hooks.js"
      // './steps/saucedemo.steps.js'
    ],
    // publishQuiet: true,
    format: ["progress"],
    worldParameters: {
      baseUrl: "https://www.saucedemo.com/"
    }
  }
};
// "json:reports/cucumber_report.json"