if (Number(process.version.slice(1).split('.')[0]) < 8) 
  throw new RangeError('Node 8.0.0 or higher is required. Update Node on your system.');

const config = require('./config.json');
const eris = require('eris');

const client = new eris.CommandClient(config.token, {
  autoreconnect: true,
  getAllUsers: false,
  restMode: true,
  defaultImageFormat: 'png'
}, {
  defaultHelpCommand: true,
  name: 'Library of Code ~ API Request System',
  owner: 'Dutch van der Linde#0001',
  prefix: ['@mention ', '-'],
  defaultCommandOptions: {
    cooldown: 2000
  }
});


process.on('uncaughtException', (err) => {
  //const errorMsg = err.stack.replace(new RegExp(`${__dirname}/`, 'g'), './');
  const errorMsg = err.stack;
  console.log(`Uncaught Exception Error: ${errorMsg}`);
  //Raven.captureException(err);
  // Always best practice to let the code crash on uncaught exceptions. 
  // Because you should be catching them anyway.
  process.exit(1);
});

process.on('unhandledRejection', err => {
  console.log(`Unhandled Rejection Error: ${err.stack}`);
  //client.channels.get('503374059044601872').send(err);
  //Raven.captureException(err);
});

module.exports = client;