const credits = `
This bot was created by *MoonlightCapital#0554*
Want to have your own bot made entirely free of charge? Head to <https://discord.gg/8376ZVg>
`

exports.run = async (client, message) => {

  message.channel.send(credits)
}

exports.help = {
  name: 'credits',
  info: 'Credits to the bot developers',
  usage: '',
  unlisted: false,
}

exports.config = {
  guildOnly: false,
  ownerOnly: false,
  aliases: [],
}
