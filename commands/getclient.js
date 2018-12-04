const client = require('../client.js');
const axios = require('axios');
const RichEmbed = require('../RichEmbed.js');

module.exports = {
  name: 'getclient',
  action: async (msg, args) => {
    const thisRequest = await axios({
      method: 'get',
      url: `http://sas.libraryofcode.ml/api/client/${args}`,
      headers: {
        authorization: '446067825673633794'
      }
    });

    const embed = new RichEmbed();
    embed.setTitle('Client Data');
    //if (await thisRequest.)
    try {
      embed.addField('Client Name', await thisRequest.data.client.name, true);
      console.log(await thisRequest.data.client.name);
    } catch (err) {
      embed.addField('Client Name', `Error | ${err}`, true);
    }
    try {
      embed.addField('Client ID', await thisRequest.data.client.id, true);
      console.log(await thisRequest.data.client.id);
    } catch (err) {
      embed.addField('Client ID', `Error | ${err}`, true);
    }
    try {
      console.log(thisRequest.data.client.owner);
      if (typeof await thisRequest.data.client.owner == undefined) {
        embed.addField('Client Owner', 'Undefined', true);
      } else {
        embed.addField('Client Owner', await thisRequest.data.client.owner, true);
      }
    } catch (err) {
      embed.addField('Client Owner', `Error | ${err}`, true);
    }
    try {
      console.log(await thisRequest.data.client.prefix);
      embed.addField('Client Prefix', await thisRequest.data.client.prefix, true);
    } catch (err) {
      embed.addField('Client Prefix', `Error | ${err}`, true);
    }
    try {
      console.log(await thisRequest.data.approval.type);
      embed.addField('Approval Type', await thisRequest.data.approval.type, true);
    } catch (err) {
      embed.addField('Approval Type', `Error | ${err}`, true);
    }
    try {
      console.log(await thisRequest.data.approval.staff);
      embed.addField('Approval Responsible Staff', await thisRequest.data.approval.staff, true);
    } catch (err) {
      embed.addField('Approval Responsible Staff', `Error | ${err}`, true);
    }
    try {
      console.log(await thisRequest.data.client.time);
      embed.addField('Approval Time', await thisRequest.data.approval.time, true);
    } catch (err) {
      embed.addField('Approval Time', `Error | ${err}`, true);
    }
    embed.setFooter(client.user.username, client.user.avatarURL);
    embed.setTimestamp();
    msg.channel.createMessage(embed);
  },
  options: {
    'description': 'Gets information on a specified client from the API.',
    'usage': 'getclient [clientID]'
  }
};  