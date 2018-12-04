class RichEmbed {
  constructor() {
    this.embed = {};
  }
  setAuthor(text, icon) {
    this.embed.author = {};
    this.embed.author.name = text;
    this.embed.author.icon_url = icon;
    return this;
  }
  setFooter(text, icon) {
    this.embed.footer = {};
    this.embed.footer.text = text;
    this.embed.footer.icon_url = icon;
    return this;
  }
  setColor(color) {
    this.embed.color = color;
  }
  setTimestamp() {
    this.embed.timestamp = new Date();
  }
  setTitle(str) {
    if (str.length >= 256) throw new RangeError('Embed titles may not exceed 256 characters.');
    this.embed.title = str;
    return this;
  }
  setDescription(str) {
    if (str.length >= 2048) throw new RangeError('Embed descriptions may not exceed 2048 characters.');
    this.embed.description = str;
    return this;
  }
  addField(name, value, inline) {
    //if (typeof name !== 'string') throw new TypeError('Embed field \'name\' must be a string.');
    //if (typeof value !== 'string') throw new TypeError('Embed field \'value\' must be a string.');
    //if (typeof inline !== 'boolean') throw new TypeError('Embed field \'inline\' must be a boolean.');
    this.embed.fields = this.embed.fields || [];
    if (this.embed.fields.size >= 25) throw new RangeError('You may only have 25 embed fields.');
    if (typeof value === 'undefined') value = 'undefined'; 
    this.embed.fields.push( {name, value, inline});
    return this;
  }
  
}
  
module.exports = RichEmbed;