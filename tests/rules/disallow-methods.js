var linter = require('eslint').linter;
var ESLintTester = require('eslint-tester');

var eslintTester = new ESLintTester(linter);

eslintTester.addRuleTest("rules/disallow-methods", {
  valid: [
    {
      code: "someObject.someMethod()",
      options: [[
        {
          object: "someObject",
          method: "disallowedMethod"
        }
      ]]
    },
    {
      code: "anotherObject.disallowedMethod()",
      options: [[
        {
          object: "someObject",
          method: "disallowedMethod"
        }
      ]]
    }
  ],
  invalid: [
    {
      code: "someObject.disallowedMethod()",
      options: [[
        {
          object: "someObject",
          method: "disallowedMethod"
        }
      ]],
      errors: [
        {
          message: "Calling someObject.disallowedMethod() is disallowed",
          type: "CallExpression"
        }
      ]
    },
    {
      code: "someObject.disallowedMethod(); anotherObject.anotherDisallowedMethod()",
      options: [[
        {
          object: "someObject",
          method: "disallowedMethod"
        }, {
          object: "anotherObject",
          method: "anotherDisallowedMethod"
        }
      ]],
      errors: [
        {
          message: "Calling someObject.disallowedMethod() is disallowed",
          type: "CallExpression"
        }, {
          message: "Calling anotherObject.anotherDisallowedMethod() is disallowed",
          type: "CallExpression"
        }
      ]
    }
  ]
});
