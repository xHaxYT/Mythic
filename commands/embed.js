const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("You can not use this command!")
    
     message.delete()
    // mentioned or grabbed user
    let author = message.mentions.members.first() || message.guild.members.get(args[0])
    if(!author) return message.channel.send("Please provide a valid user").then(m => m.delete(15000))

    // reasoning definition
    let reason = args.slice(1).join(" ")
    if(!reason) return message.channel.send(`Please provide a reason for reporting **${author.user.tag}**`).then(m => m.delete(15000))

    // grab reports channel
    let sChannel = message.mentions.channels.first()

    // send to reports channel and add tick or cross

    let ssEmbed = new Discord.RichEmbed()
    .setAuthor(`${author.user.tag}`, author.user.displayAvatarURL)
    .setTimestamp()
    .setFooter(`MYTHIC Clan`, bot.user.displayAvatarURL);
    sChannel.send({embed: ssEmbed})
}


module.exports.config = {
    name: "embed",
    description: "sends a message that was inputted to a channel",
    usage: "!embed",
    accessableby: "Staff",
    aliases: ["saye"]
}