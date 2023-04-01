# Usage

## e.g.)
```
main.js
getFilesByExt.js
root/
├file1.txt
├file2.mp3
└dir1/
  ├dir2/
  │  ├file3.txt
  │  └file4.txt
  └dir3/
     ├file5.jpg
     └file6.png
```

## main.js
```main.js
const {getFilesByExt} = require('./getFilesByExt');
const dirPath = './root'

// ['root/dir1/dir2/file3.txt', 'root/dir1/dir2/file4.txt', 'root/file1.txt']
let option = { ext: 'txt' }
let result = getFilesByExt(dirPath, option)
console.log(result)

// ['root/dir1/dir3/file5.jpg', 'root/dir1/dir3/file6.png', 'root/file2.mp3']
option = {ext: ['mp3', 'jpg', 'png']}
result = getFilesByExt(dirPath, option)
console.log(result)
```
