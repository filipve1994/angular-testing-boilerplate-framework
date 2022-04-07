const fs = require('fs');
const zip = require('bestzip');
const { program } = require('commander');

const package = require('./package.json');

program
  .version('1.0.0', '-v', '--version')
  .usage('[OPTIONS]...')
  .option('-d', '--debug', '--output extra debugging')
  .requiredOption('-an', '--appname <name>', 'app name')
  .requiredOption('-av', '--appversion <version>', 'app version')
  .parse(process.argv);

const options = program.opts();
if(options.debug) console.log(options);

console.log('script details:');

if(program.appname) console.log('- appname is set.');
if(program.appname) console.log(`- appname = ${options.appname}.`);

if(program.appversion) console.log('- appversion is set.');
if(program.appversion) console.log(`- appversion = ${options.appversion}.`);

const fileContent = {
  appVersion: `${options.appversion}`
};

process.chdir('dist/' + package.name);

zip({
  source: './*',
  destination: `../${options.appname}-${options.appversion}.zip`
}).then(function () {
  console.log('all done!');
}).catch(function (err) {
  console.error(err.stack);
  process.exit(1);
});
