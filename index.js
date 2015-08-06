"use strict";

var disallowMethods = require("./lib/rules/disallow-methods");

module.exports = {
    rules: {
        "disallow-methods": disallowMethods
    }
};
