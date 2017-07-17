exports.run = (client, message) => {
  message.channel.send('Check DMs! :envelope_with_arrow:')
  message.author.send('Invite me to your server: https://discordapp.com/oauth2/authorize?client_id=334747976591343616&scope=bot&permissions=8')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'inviteme',
  description: 'Invites the bot to your server.',
  usage: 'inviteme'
};
