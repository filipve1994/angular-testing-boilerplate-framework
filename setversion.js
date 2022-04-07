const fs = require('fs');
const { program } = require('commander');

const package = require('./package.json');

program
  .version('1.0.0', '-v', '--version')
  .usage('[OPTIONS]...')
  .option('-d', '--debug', '--output extra debugging')
  .requiredOption('-av', '--appversion <version>', 'app version')
  .parse(process.argv);

const options = program.opts();
if(options.debug) console.log(options);

console.log('script details:');

if(program.appversion) console.log('- appversion is set.');
if(program.appversion) console.log(`- appversion = ${options.appversion}.`);

const fileContent = {
  appVersion: `${options.appversion}`
};

process.chdir('dist/' + package.name + '/assets/config');

fs.writeFileSync('./config.json', JSON.stringify(fileContent));
