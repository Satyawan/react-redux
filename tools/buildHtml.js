import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';  // eslint-disable-line

/*eslint-disable no-console */
fs.readFile('src/index.html', 'utf8', (err, markup) => {
 
  if (err) return console.log(`❌  fs.readFile ERROR: ${err}`);

  const $ = cheerio.load(markup);

  $('head').prepend('<link rel="stylesheet" href="styles.css" />');

  fs.writeFile('dist/index.html', $.html(), 'utf8', (error) => {
    
    if (error) return console.log(`❌  fs.readFile ERROR: ${error}`);
    return console.log('\n ✅  index.html written to "/dist"'.green);
  });
  return 1;
});