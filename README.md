# langParser
A library to parse .lang files!

### Example usage

```js
const lang = `"hello.world": "Hello, World"`

console.log(langParser.parse(lang))
```

### Example .lang file

```
"hello.world": "Hello, World"
```

Output:

````json
{ hello: { world: 'Hello, World' } }
```
