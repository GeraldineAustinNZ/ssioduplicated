const fg = require('fast-glob');
const fs = require('fs');

(async () => {
  const files = await fg('node_modules/**/*.{js,mjs}', { absolute: true });
  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf-8');
      if (content.includes('import.meta')) {
        console.log(file);
      }
    } catch (err) {
      // Skip files that can't be read
    }
  }
})();

