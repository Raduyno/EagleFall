fs = require('fs')
exports.run = (client, message) => {
    var memetxt = fs.readFileSync("./memes.txt", {"encoding": "utf-8"});
    var lines = memetxt.split('\n');
    var meme =lines[Math.floor(Math.random() * lines.length)];
    message.channel.send(meme) // random line from the text file
};

/**
 * NOTE: For memes.txt
 * Please use Direct IMGUR links
 */

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'meme',
  description: 'Gets you a random meme from the bot meme database',
  usage: 'meme'
};
