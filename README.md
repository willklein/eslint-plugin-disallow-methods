# eslint-plugin-disallow-methods

> ESLint plugin for disallowing specified methods

## Usage

This plugin requires ESLint to also be installed. With both ESLint and this plugin installed, you will need to enable the plugin and configure what methods are disallowed.

### Installation

Install ESLint if you have not already:

    npm install eslint

Install the plugin:

    npm install eslint-plugin-disallow-methods

### Configuration

Configure the plugin and its rules in your `.eslintrc` file or your shareable config.

Sample `.eslintrc`:

    {
      "plugins": [
        // other plugins would go here
    
        "disallow-methods"
      ],
    
      rules: {
        // other rules here
    
        // disallow-methods rules
        disallow-methods/disallow-methods: [2, [
          {
            object: "protectedObject",
            method: "disallowedMethod"
          },
          {
            object: "anotherProtectedObject",
            method: "anotherDisallowedMethod"
          }
        ]]
      }
    }

Configuring rule to `1` will set it to warn and configuring it to `2` will set it to error.

## Under Development

This plugin is under active development and its API may change at any time.

## License

[MIT](http://mit-license.org/) © [Will Klein](http://willkle.in)
