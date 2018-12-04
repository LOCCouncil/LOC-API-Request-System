const client = require('../client.js');
const util = require('util');

module.exports = {
  name: 'eval',
  action: async (msg, args) => {
    const code = args.join(' ');
    let evaled;

    try {
      evaled = await eval(code);
      if (typeof evaled === 'object') {
        evaled = util.inspect(evaled, {
          depth: 0
        });
      }
    } catch (err) {
      const errorEmbed = {
        title: 'JavaScript Eval',
        color: 16711680,
        description: `\`\`\`xl\n${err}\`\`\``,
        timestamp: new Date(msg.createdAt),
        footer: {
          text: client.user.username,
          icon_url: client.user.avatarURL
        }
      };
      return msg.channel.createMessage({embed: errorEmbed});
    }
    
    if (typeof evaled === 'string') {
      evaled = evaled.replace(client.token, '[TOKEN]');
    }

    if (typeof evaled === 'object') {
      evaled = require('util').inspect(evaled, {depth: 0});
    }
    
    if (evaled == undefined) {
      evaled = 'undefined';
    }

    if (evaled.length > 1900) {
      evaled = 'Response too large to be sent.';
    }

    const successEmbed = {
      title: 'JavaScript Eval',
      color: 65280,
      description: `\`\`\`js\n${evaled}\`\`\``,
      timestamp: new Date(msg.createdAt),
      footer: {
        text: client.user.username,
        icon_url: client.user.avatarURL
      }
    };
    return msg.channel.createMessage({embed: successEmbed});
  },

  options: {
    'description': 'Evaluates JavaScript code.',
    'aliases': ['e'],
    'cooldown': 0,
    'hidden': true,
    'requirements': {
      'userIDs': ['278620217221971968', '239261547959025665', '282586181856657409', '155698776512790528']
    }
  } 
};