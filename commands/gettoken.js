const axios = require('axios');
const config = require('../config.json');
const client = require('../client');

module.exports = {
  name: 'gettoken',
  action: async (msg) => {
    const prevMessage = await msg.channel.createMessage('Generating token...');
    const res = await axios({
      method: 'get',
      url: `http://sas.libraryofcode.ml/api/token/${msg.member.id}`,
      headers: {
        authorization: config.adminAuth
      }
    });
    prevMessage.edit('Your token has been messaged to you directly, remember not to share this token with anyone else for any reason whatsoever.');
    if (msg.channel.type === 1) {
      const RichEmbed = require('../RichEmbed');
      const embed = new RichEmbed();
      embed.setColor(0x38393E);
      embed.setTitle('Library of Code | API Token');
      embed.addField('User', `${msg.member.user.username}#${msg.member.user.discriminator}`, true);
      embed.addField('Token', res.data, true);
      embed.setFooter(client.user.username, 'https://images-ext-1.discordapp.net/external/GbYUyna-CcBOWD-zKoLv98EcvLahR_vDm1OzO3m5CoM/%3Fsize%3D128/https/cdn.discordapp.com/avatars/507353658661535754/ee1c00dbd90b5ef6d14589ce10074b30.png');
      msg.channel.createMessage(embed);
    } else {

    msg.member.user.getDMChannel().then(c => {
      const RichEmbed = require('../RichEmbed');
      const embed = new RichEmbed();
      embed.setColor(0x38393E);
      embed.setTitle('Library of Code | API Token');
      embed.addField('User', `${msg.member.user.username}#${msg.member.user.discriminator}`, true);
      embed.addField('Token', res.data, true);
      embed.setFooter(client.user.username, 'https://images-ext-1.discordapp.net/external/GbYUyna-CcBOWD-zKoLv98EcvLahR_vDm1OzO3m5CoM/%3Fsize%3D128/https/cdn.discordapp.com/avatars/507353658661535754/ee1c00dbd90b5ef6d14589ce10074b30.png');
      c.createMessage(embed);
    });
  }
  },
  options: {
    'description': 'Fetches your token from the API.'
  }
};   