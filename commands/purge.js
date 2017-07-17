const main = ('./bot.js')
exports.run = function(client, message, args) {
  let messagecount = parseInt(args.join(' '));
  let mod_role = message.guild.roles.find('name', 'Mods');
  if (!mod_role) return message.reply('Nope... you need to have the "Mods" role my friend...');
  if (messagecount > 100) {
    message.channel.send('Max Messages that can be Deleted: ``100``')
  } else {
    message.channel.fetchMessages({
      limit: messagecount
    }).then(messages => message.channel.bulkDelete(messages));
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'purge',
  description: 'Purges X amount of messages from a given channel.',
  usage: 'purge <number>'
};
