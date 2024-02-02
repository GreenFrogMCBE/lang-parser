# lang-parser

A library to parse .lang files!

### Example usages

#### JS

```js
const parser = require("@greenfrogmcbe/lang-parser")

const lang = `"hello.world": "Hello, World"`

console.log(parser.parse_json(lang)) // Output: { hello: { world: 'Hello, World' } }
```

```js
const parser = require("@greenfrogmcbe/lang-parser")

const lang = `"hello.world": "Hello, World"`

console.log(parser.parse_raw(lang)) // Output: { "hello.world": "Hello, World" }
```

```js
const parser = require("@kotinash/lang-parser")

const lang = `"hello.world": "Hello, World"`

console.log(parser.get_key("hello.world", parser.parse_raw(lang))) // Output: Hello, World
console.log(parser.get_key("hello.world", parser.parse_json(lang)); // Output: Hello, World
```

#### TS

```ts
import { parse_json } from "@kotinash/lang-parser"

const lang = `hello.world=Hello, World` 

console.log(parse_json(lang)); // Output: { hello: { world: 'Hello, World' } }
```

```ts
import { parse_raw } from "@kotinash/lang-parser"

const lang = `hello.world=Hello, World` 

console.log(parse_raw(lang)); // Output: { "hello.world": 'Hello, World' }
```

```ts
import { get_key, parse_raw, parse_json } from "@kotinash/parser"

const lang = `hello.world=Hello, World` 

console.log(get_key("hello.world", parse_raw(lang)); // "Hello, World"
console.log(get_key("hello.world", parse_json(lang)); // "Hello, World"
```
