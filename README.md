![thumbnail](./thumbnail.png)

# countLines
読み込んだファイルの行数をカウントします

# Installation
```bash
npm install --save node-countlines
```

# Usage
```javascript
const countLines = require("node-countlines");
countLines(/* path to file */).then(result => {
	console.log(result);
})
```