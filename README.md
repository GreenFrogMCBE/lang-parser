# langParser
A library to parse .lang files!

### Example usage

```js
const lang = `"hello.world": "Hello, World"`

console.log(langParser.parseJson(lang)) // Output: { hello: { world: 'Hello, World' } }
```

```js
const lang = `"hello.world": "Hello, World"`

console.log(langParser.parseRaw(lang)) // Output: { "hello.world": "Hello, World" }
```

```js
const lang = `"hello.world": "Hello, World"`

console.log(langParser.getKey("hello.world", langParser.parseRaw(lang))) // Output: Hello, World
```