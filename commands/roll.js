exports.run = (client, message) => {
  let roll = Math.floor((Math.random() * 6 ) + 1);
  message.reply(":game_die: | You rolled a " + roll);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'roll',
  description: 'Roll a single Die.',
  usage: 'roll'
};
