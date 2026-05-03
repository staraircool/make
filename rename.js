const fs = require('fs');
const path = require('path');

const dir = 'public/assets/images';
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.startsWith('A perfect')) fs.renameSync(path.join(dir, file), path.join(dir, 'lookbook-1.jpg'));
  if (file.startsWith('A vibrant')) fs.renameSync(path.join(dir, file), path.join(dir, 'lookbook-2.jpg'));
  if (file.startsWith('Cool Brown')) fs.renameSync(path.join(dir, file), path.join(dir, 'lookbook-3.jpg'));
  if (file.startsWith('Side bangs')) fs.renameSync(path.join(dir, file), path.join(dir, 'lookbook-4.jpg'));
});
