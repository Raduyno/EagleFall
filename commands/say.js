const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let msgSender = args.join(' ');
  message.delete()
  message.channel.send(msgSender);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'say',
  description: 'Kicks the mentioned user.',
  usage: 'say [message]'
}; 
