exports.run = (client, message) => {
  let coinVal = Math.floor((Math.random() * 2 ) + 1);
  if (coinVal == 2) {
    message.reply(":arrows_counterclockwise: | Heads");
  } else {
    message.reply(":arrows_counterclockwise: | Tails");
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'flip',
  description: 'Heads or tails?',
  usage: 'flip'
};
