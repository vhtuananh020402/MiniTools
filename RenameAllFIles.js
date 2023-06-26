const fs = require('fs');
const path = require('path');

const folderPath = './img'; // Path to the folder containing the files

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Error reading folder:', err);
    return;
  }

  files.forEach((file, index) => {
    const filePath = path.join(folderPath, file);
    const stats = fs.statSync(filePath);
    const fileExtension = path.extname(file);
    const newFileName = `image${index}${fileExtension}`;

    const newFilePath = path.join(folderPath, newFileName);
    fs.renameSync(filePath, newFilePath);

    console.log(`${file} renamed to ${newFileName}`);
  });
});