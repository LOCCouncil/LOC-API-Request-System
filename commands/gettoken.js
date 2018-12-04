const axios = require('axios');
const config = require('../config.json');

module.exports = {
  name: 'gettoken',
  action: async (msg) => {
    //msg.delete();
    const prevMessage = await msg.channel.createMessage('Generating token...');
    const res = await axios({
      method: 'get',
      url: `http://sas.libraryofcode.ml/api/token/${msg.member.id}`,
      headers: {
        authorization: config.adminAuth
      }
    });
    prevMessage.edit('Your token has been messaged to you directly, remember not to share this token with anyone else for any reason whatsoever.');
    msg.member.user.getDMChannel().then(c => c.createMessage(res.data));
  },
  options: {
    'description': 'Fetches your token from the API.',
  }
};   