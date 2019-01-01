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
    msg.member.user.getDMChannel().then(c => {
      const RichEmbed = require('../RichEmbed');
      const embed = new RichEmbed();
      embed.setColor('38393E');
      embed.setTitle('Library of Code | API Token');
      embed.addField('User', `${msg.member.user.username}#${msg.member.user.discriminator}`, true);
      embed.addField('Token', res.data, true);
      embed.setFooter(client.user.username, 'https://discordapp.com/channels/446067825673633794/468759629334183956');
      c.createMessage(embed);
    });
  },
  options: {
    'description': 'Fetches your token from the API.',
  }
};   