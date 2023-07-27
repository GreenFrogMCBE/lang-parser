# langParser
A library to parse .lang files!

### Example usage

```js
const langParser = require("./index")

const lang = `"hello.world": "Hello, World"`

console.log(langParser.parseJson(lang)) // Output: { hello: { world: 'Hello, World' } }
```

```js
const langParser = require("./index")

const lang = `"hello.world": "Hello, World"`

console.log(langParser.parseRaw(lang)) // Output: { "hello.world": "Hello, World" }
```

```js
const langParser = require("./index")

const lang = `"hello.world": "Hello, World"`

console.log(langParser.getKey("hello.world", langParser.parseRaw(lang))) // Output: Hello, World
```

```ts
import { parseJson } from "./index"

const langString = `hello.world=Hello, World` 

console.log(parseJson(langString)); // Output: { hello: { world: 'Hello, World' } }
```

```ts
import { parseRaw } from "./index"

const langString = `hello.world=Hello, World` 

console.log(parseRaw(langString)); // Output: { "hello.world": 'Hello, World' }
```

```ts
import { getKey, parseRaw, parseJson } from "./index"

const langString = `hello.world=Hello, World` 

console.log(getKey("hello.world", parseRaw(langString)); // "Hello, World"
console.log(getKey("hello.world", parseJson(langString)); // "Hello, World"
```