exports.run = (client, message) => {
  message.channel.send('What is Life?')
    .then(msg => {
      msg.edit(`Life is the biggest gift you'll ever get (took: ${msg.createdTimestamp - message.createdTimestamp}ms)`);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Ping/Pong command. I wonder what this does? /sarcasm',
  usage: 'ping'
};
