const axios = require('axios');

module.exports = {
  name: 'postnick',
  action: async (msg, args) => {
    msg.delete();
    const prevMessage = await msg.channel.createMessage('Loading...');
    axios({
      method: 'post',
      url: `http://sas.libraryofcode.ml/api/member/${msg.member.id}}`,
      headers: {
        authorization: args[0],
        nick: args.splice(1).join(' ')
      }
    });
    prevMessage.edit(`Nickname successfully edited to \`${args.splice(1).join(' ')}\``);
  },
  options: {
    'description': 'Changes your nickname in the server.',
    'usage': 'postnick [token] [new nick]'
  }
};   