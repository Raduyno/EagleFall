exports.run = (client, message) => {
  message.channel.send('EagleFall :eagle: A Multi use Discord bot Developed by LightWarp#5690')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'info',
  description: 'Gives Information about the Bot.',
  usage: 'info'
};
