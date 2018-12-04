//const client = require('../client.js');
const axios = require('axios');

module.exports = {
  name: 'putprefix',
  action: async (msg, args) => {
    msg.delete();
    const prevMessage = await msg.channel.createMessage('Loading...');
    axios({
      method: 'put',
      url: `http://sas.libraryofcode.ml/api/client/${args[1]}/${args.splice(2).join(' ')}`,
      headers: {
        authorization: args[0],
        owner: msg.member.id
      }
    });
    prevMessage.edit('Done.');
  },
  options: {
    'description': 'Sets/Edits your bot\'s prefix.',
    'usage': 'putprefix [token] [botID] [prefix]'
  }
};   