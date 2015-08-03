module.exports = function(context) {
  var disallowedMethods = context.options[0];

  return {
    "CallExpression": function(node) {
      disallowedMethods.forEach(function(disallowedMethod) {
        var calledObject = node.callee.object && node.callee.object.name;
        var calledMethod = node.callee.property && node.callee.property.name;

        if (calledObject && calledObject === disallowedMethod.object &&
            calledMethod && calledMethod === disallowedMethod.method) {
          context.report(node, "Calling " + disallowedMethod.object + "." + disallowedMethod.method + "() is disallowed");
        }
      });
    }
  };
};
