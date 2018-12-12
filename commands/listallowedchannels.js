const {RichEmbed} = require('discord.js')

exports.run = async (client, message) => {

  if(!message.member.hasPermission('MANAGE_MESSAGES'))
    return message.channel.send(':no_entry: You do not have permission to manage channels')

  const msg = await message.channel.send(':ok_hand: Fetching channels...')

  const list = message.guild.channels.filter(c=>c.type === 'text' && c.topic && c.topic.includes('{deletemessages}'))
  .map(d=>d.toString())
  .join('\n')

  if(list.length > 2048)
    return msg.edit(':warning: The list is too long!')

  if(list.length === 0)
    return msg.edit(':warning: No channels found')

  const embed = new RichEmbed()
  .setTitle('Allowed channels')
  .setDescription(list)

  .setFooter('To remove a channel from this list, simply remove {deletemessages} from the topic')

  await msg.edit(':white_check_mark: Found some channels', embed)
}

exports.help = {
  name: 'listallowedchannels',
  info: 'List all channels where messages will be deleted from',
  usage: '',
  unlisted: false,
}

exports.config = {
  guildOnly: true,
  ownerOnly: false,
  aliases: ['allowedchannels', 'lac'],
}
