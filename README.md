# lang-parser
A library to parse .lang files!

### Example usages

#### JS

```js
const langParser = require("@kotinash/lang-parser")

const langString = `"hello.world": "Hello, World"`

console.log(langParser.parseJson(langString)) // Output: { hello: { world: 'Hello, World' } }
```

```js
const langParser = require("@kotinash/langparser")

const langString = `"hello.world": "Hello, World"`

console.log(langParser.parseRaw(langString)) // Output: { "hello.world": "Hello, World" }
```

```js
const langParser = require("@kotinash/lang-parser")

const langString = `"hello.world": "Hello, World"`

console.log(langParser.getKey("hello.world", langParser.parseRaw(langString))) // Output: Hello, World
console.log(langParser.getKey("hello.world", langParser.parseJson(langString)); // "Hello, World"
```

#### TS

```ts
import { parseJson } from "@kotinash/lang-parser"

const langString = `hello.world=Hello, World` 

console.log(parseJson(langString)); // Output: { hello: { world: 'Hello, World' } }
```

```ts
import { parseRaw } from "@kotinash/lang-parser"

const langString = `hello.world=Hello, World` 

console.log(parseRaw(langString)); // Output: { "hello.world": 'Hello, World' }
```

```ts
import { getKey, parseRaw, parseJson } from "@kotinash/langparser"

const langString = `hello.world=Hello, World` 

console.log(getKey("hello.world", parseRaw(langString)); // "Hello, World"
console.log(getKey("hello.world", parseJson(langString)); // "Hello, World"
```
