# lang-parser

A library to parse .lang files!

## Example usage

```js
const { LanguageParser } = require('./index.js')

const lang = LanguageParser.parse_json(`hello.world=Hello, World. Here is an example placeholder: %0`)

console.log(LanguageParser.get_key("hello.world", lang))
console.log(LanguageParser.get_key("hello.world", lang, ["hey"]))
```