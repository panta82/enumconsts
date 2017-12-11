#Enum Consts

Just the contents of `os.constants`, in a form better parsed by IDE-s and editors. Also includes explanations as JSDoc.

```bash
npm install -s enumconsts
```
or 
```bash
yarn add enumconsts
```

... then:

```javascript
const errno = require('enumconsts').errno;

fs.readFile('test.txt', (err, data) => {
	if (err && err.code === errno.ENOENT) {
		console.log("File doesn't exist");
	}
});

```

You can see all the constants here: https://nodejs.org/api/os.html#os_os_constants_1

One small adition is that consts are available in uppercase as well, for those who like that.

```javascript
const SIGNALS = require('enumconsts').SIGNALS;

console.log(SIGNALS.SIGINT);
```

### Licence

MIT