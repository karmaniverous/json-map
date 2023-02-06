# json-map

Retrieve an object from a JSON map that overrides an optional default.

To install, run:

```
npm install @karmaniverous/json-map
```

This package is particularly useful when retrieving values from a config file.
For example, assume the following config file `config.js`:

```json
{
  "default": {
    "a": 1,
    "b": 2
  },
  "map": {
    "dev": {
      "b": 3,
      "c": 4
    },
    "test": {
      "b": 5,
      "c": 6
    }
  }
}
```

You could then write this code:

```js
import { jsonMap } from '@karmaniverous/json-map';

// Load the config file.
import config from './config.js' assert { type: 'json' };

// Pull the 'dev' config, which overrides the default value.
console.log(jsonMap(config, 'dev'));

// { a: 1, b: 3, c: 4 }

// Pull the 'test' config, which overrides the default value.
console.log(jsonMap(config, 'test'));

// { a: 1, b: 5, c: 6 }
```

The `default` and `map` tokens may be customized as described in the
[API Documentation](#API-Documentation) below.

'jsonMap` behaves gracefully when the default, map, or key are undefined. See
the
[unit tests](https://github.com/karmaniverous/json-map/blob/main/lib/jsonMap.test.js)
for more info.

# API Documentation

<a name="jsonMap"></a>

## jsonMap(input, [key], [defaultToken], [mapToken]) ⇒ <code>object</code>
Retrieve an object from a JSON map that overrides an optional default.

**Kind**: global function  
**Returns**: <code>object</code> - Object at specified map key assigned over default object.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>object</code> | Input object. |
| [key] | <code>string</code> | Override key. |
| [defaultToken] | <code>string</code> | Default token (default: 'default'). |
| [mapToken] | <code>string</code> | Map token (default: 'map'). |


---

See more great templates and other tools on
[my GitHub Profile](https://github.com/karmaniverous)!
