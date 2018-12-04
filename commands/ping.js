module.exports = {
  name: 'ping',
  action: async (msg) => {
    const then = Date.now();
    const newmsg = await msg.channel.createMessage('Pong!');
    const diff = Date.now() - then;
    newmsg.edit(`Pong! \`${diff}ms\``);
  },
  options: {
    'description': 'Get the bot\'s response time.',
    'fullDescription': 'Get the bot\'s ping / response time.'
  }
};   