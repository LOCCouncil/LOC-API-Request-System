const axios = require('axios');
const config = require('../config.json');
const client = require('../client');

module.exports = {
  name: 'getlinuxtoken',
  action: async (msg, args) => {
    const prevMessage = await msg.channel.createMessage('Generating token...');
    const res = await axios({
      method: 'put',
      url: `https://linux.edu.libraryofcode.ml/system/users/${args[0]}/token`,
      headers: {
        password: args[2]
      }
    });
    prevMessage.edit('Your system token has been messaged to you directly, remember not to share this token with anyone else for any reason whatsoever. The only way to regenerate these tokens is by changing your pass.txt file or your username itself.');
    if (msg.channel.type === 1) {
        const RichEmbed = require('../RichEmbed');
        const embed = new RichEmbed();
        embed.setColor(0x38393E);
        embed.setTitle('Library of Code | Linux Server API Token');
        embed.addField('Requester', `${msg.member.user.username}#${msg.member.user.discriminator}`, true);
        embed.addField('User', args[0], true);
        embed.addField('Password', args[1], true);
        embed.addField('Token', res.data, true);
        embed.setFooter(client.user.username, 'https://images-ext-1.discordapp.net/external/GbYUyna-CcBOWD-zKoLv98EcvLahR_vDm1OzO3m5CoM/%3Fsize%3D128/https/cdn.discordapp.com/avatars/507353658661535754/ee1c00dbd90b5ef6d14589ce10074b30.png');
        msg.channel.createMessage(embed);
    } else {
    msg.member.user.getDMChannel().then(c => {
      msg.delete();
      const RichEmbed = require('../RichEmbed');
      const embed = new RichEmbed();
      embed.setColor(0x38393E);
      embed.setTitle('Library of Code | Linux Server API Token');
      embed.addField('Requester', `${msg.member.user.username}#${msg.member.user.discriminator}`, true);
      embed.addField('User', args[0], true);
      embed.addField('Password', args[1], true);
      embed.addField('Token', res.data, true);
      embed.setFooter(client.user.username, 'https://images-ext-1.discordapp.net/external/GbYUyna-CcBOWD-zKoLv98EcvLahR_vDm1OzO3m5CoM/%3Fsize%3D128/https/cdn.discordapp.com/avatars/507353658661535754/ee1c00dbd90b5ef6d14589ce10074b30.png');
      c.createMessage(embed);
    });
   }
  },
  options: {
    'description': 'Fetches your token from the API.',
    'usage': '<username> <password>'
  }
};   