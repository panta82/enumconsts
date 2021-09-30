# Enum Consts

Just the contents of `os.constants`, in a form better parsed by IDE-s and editors. Also includes explanations as JSDoc.

```bash
npm install enumconsts
```
or 
```bash
yarn add enumconsts
```

... then:

```javascript
const fs = require('fs');
const { errno } = require('enumconsts');

fs.readFile('test.txt', (err, data) => {
	if (err && err.code === errno.ENOENT) {
		console.log("File doesn't exist");
	}
});

```

You can see all the constants here: <https://nodejs.org/api/os.html#os_os_constants_1>

One small addition is that consts are available in uppercase as well, for those who like that.

```javascript
const { SIGNALS } = require('enumconsts');

console.log(SIGNALS.SIGINT);
```

### API

This module exports the following enum objects:

#### `errno`
Type: `object`

Error constants as strings.

#### `signals`
Type: `object`

Signal constants as strings.

#### `dlopen`
Type: `object`

Dlopen constants as strings.

#### `priority`
Type: `object`

Process scheduling constants as strings.

#### `libuv`
Type: `object`

Libuv constants as strings.

#### `ERRNO`
Type: `object`

Alias for `errno`.

#### `SIGNALS`
Type: `object`

Alias for `signals`.

#### `DLOPEN`
Type: `object`

Alias for `dlopen`.

#### `PRIORITY`
Type: `object`

Alias for `priority`.

#### `LIBUV`
Type: `object`

Alias for `libuv`.

### Updates

##### **1.1.0**  
- Better JSDOC structure
- Probably better intellisense in JetBrains editors

##### **2.0.0**
Big update by [BendingBender](https://github.com/BendingBender):
- Typescript types
- Use frozen objects instead of classes
- Update to latest Node.js constants + descriptions
- Document all exported members
- Reduce NPM package size

Major version bump is due to the usage of `Object.freeze()` in exports.

### Releasing

Just run `npm run release` and follow the instructions.

### Licence

MIT
