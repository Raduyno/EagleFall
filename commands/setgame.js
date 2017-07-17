const main = ('./bot.js')
exports.run = function(client, message, args) {
  let game = args.join(' ');
  let ownerid = 216587031944364032
  if (message.author.id !=ownerid) return message.reply('You are not a bot owner faggot...');
  if (game.length < 1) return message.reply('You must specify a game to set!').catch(console.error);
  client.user.setGame(game)
  message.channel.send('Successfully Changed the game to: ``' + game + '``')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'setgame',
  description: 'Sets the game the bot is playing',
  usage: 'setgame <game>'
};
