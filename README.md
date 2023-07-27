# langparser
A library to parse .lang files!

### Examples

#### JS

```js
const langParser = require("./index")

const langString = `"hello.world": "Hello, World"`

console.log(langParser.parseJson(langString)) // Output: { hello: { world: 'Hello, World' } }
```

```js
const langParser = require("./index")

const langString = `"hello.world": "Hello, World"`

console.log(langParser.parseRaw(langString)) // Output: { "hello.world": "Hello, World" }
```

```js
const langParser = require("./index")

const langString = `"hello.world": "Hello, World"`

console.log(langParser.getKey("hello.world", langParser.parseRaw(langString))) // Output: Hello, World
console.log(langParser.getKey("hello.world", langParser.parseJson(langString)); // "Hello, World"
```

#### TS

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
