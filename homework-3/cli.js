var app = require('./app');
var yargs = require('yargs');

var option = yargs.usage('$0:  cli.js')
  .options('h', {
    alias: 'help',
    describe: 'Display help'
  })
  .options('m', {
    alias: 'math',
    describe: 'Mathematical'
    })
  .options('t', {
    alias: 'trivia',
    describe: 'Trivia'
  })
  .options('d',{
     alias: 'date',
    describe: 'Date'
  },'s',{
     alias: 'save',
    describe: 'Save to the file'
  }).argv;

if (option.help) 
{
  yargs.showHelp();
} 
else
{
  app.execute(option);
}