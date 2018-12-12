const {moveHook} = require('../config')
const {WebhookClient} = require('discord.js')
const webhook = new WebhookClient(moveHook.id, moveHook.token, {disableEveryone: true})

exports.run = async (client, message) => {
  if(!message.guild) return

  if(message.channel.topic && !message.channel.topic.includes('{deletemessages}')) return
  if(!message.channel.permissionsFor(message.guild.me).has('MANAGE_MESSAGES')) return

  if(moveHook.id && moveHook.token)
   webhook.send(message.content, {username: message.author.username, avatarURL: message.author.displayAvatarURL})

  message.delete('Message sent in a channel where messages instantly disappear')

}

exports.help = {
  name: 'filter-messages',
  info: 'Filters messages',
  usage: '',
  unlisted: true,
}

exports.config = {
  guildOnly: true,
  ownerOnly: true,
  aliases: [],
}
