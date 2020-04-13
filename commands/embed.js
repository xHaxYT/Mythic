const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("You can not use this command!")
    
    message.delete()
    // mentioned or grabbed user
    let target = message.mentions.members.first() || message.guild.members.get(args[0])
    if(!target) return message.channel.send("Please provide a valid user").then(m => m.delete(15000))

    // reasoning definition
    let reason = args.slice(1).join(" ")
    if(!reason) return message.channel.send(`Please provide a reason for reporting **${target.user.tag}**`).then(m => m.delete(15000))

    // grab reports channel
    let sChannel = message.guild.channels.find(x => x.name === "【🚨】reports")

    // send to reports channel and add tick or cross

    let ssEmbed = new Discord.RichEmbed()
    .setAuthor(`[REPORT] ${message.author}`, message.author.displayAvatarURL)
    .setTimestamp()
    .addField("**User**", `**${message.author}**`, true)
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