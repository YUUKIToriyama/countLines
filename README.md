![thumbnail](./thumbnail.png)

# @toriyama/countLines
読み込んだファイルの行数をカウントします

# Installation
```bash
npm install --save @toriyama/countlines
```

# Usage
```javascript
const countLines = require("@toriyama/countlines");
countLines(/* path to file */).then(result => {
	console.log(result);
})
```