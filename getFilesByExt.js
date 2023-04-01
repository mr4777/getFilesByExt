const path = require('path');
const fs = require('fs');

/**
 * 指定されたディレクトリ下のファイルを再帰的に走査し、
 * optionで指定された拡張子を持つファイルのパスを配列で返します
 * @param {string} dirPath
 * @param {Object} option
 * @returns {Array}
 */
const getFilesByExt = (dirPath, option) => {
  let files = [];
  const items = fs.readdirSync(dirPath);
  for (let item of items) {
    const target = path.join(dirPath, item);
    if (fs.lstatSync(target).isDirectory()) {
      files = files.concat(getFilesByExt(target, option));
    } else {
      if (option.ext.includes(path.extname(target).slice(1))) {
        files.push(target.replace(/\\/g, '/'));
      }
    }
  }
  return files;
}

module.exports = {getFilesByExt};