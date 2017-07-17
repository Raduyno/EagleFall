exports.run = (client, message) => {
  respects = Math.floor(Math.random() * 9999);
  message.channel.send('You know... '+ message.author +' paid their respects: **' + respects + '**')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'f',
  description: 'Pay your fucking respects...',
  usage: 'f'
};
