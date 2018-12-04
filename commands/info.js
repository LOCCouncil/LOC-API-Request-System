const client = require('../client.js');

module.exports = {
  name: 'info',
  action: (msg) => {
    msg.channel.sendTyping();

    const embed = {
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      description: 'This is the official API Request bot for the LOC API. Documentation available [here](http://www.libraryofcode.ml/docs)',
      fields: [
        {
          name: 'Version',
          value: '0.1.0',
          inline: true
        },
        {
          name: 'Created At',
          value: new Date(client.user.createdAt).toLocaleString('en-us'),
          inline: true
        },
        {
          name: 'Library',
          value: '[Eris](https://github.com/abalabahaha/eris)',
          inline: true
        },
        {
          name: 'Language',
          value: 'JavaScript',
          inline: true
        },
        {
          name: 'Contributors',
          value: '&',
          inline: false
        },
        {
          name: 'Developers',
          value: 'Dutch van der Linde#0001',
          inline: false
        }
      ],
      timestamp: new Date(msg.createdAt),
      footer: {
        text: client.user.username,
        icon_url: client.user.avatarURL
      }
    };
    msg.channel.createMessage({ embed });
  }
};