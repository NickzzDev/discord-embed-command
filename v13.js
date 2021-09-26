const Discord = require('discord.js')

exports.run = async(client, message, args) => {
    if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send('You Do Not Have Permission To Use This Command!')
    

    const word = args.join(" ")

if (!word) return message.channel.send(`:x: Missing a Message, Please Specify the Message!`)

    message.delete()
    const embed = new Discord.MessageEmbed()
    .setColor('0x06F7C7')
    .setDescription(`${word} \n\nCreated by [Nickzz](https://github.com/NickzzDev)`)
    .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setFooter(client.user.tag, client.user.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    message.channel.send({ embeds: [embed] })
}
