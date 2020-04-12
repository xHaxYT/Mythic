const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

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
    .setTitle("Report!")
    .setAuthor(`${message.guild.name} Info`, message.guild.iconURL)
    .addField("**Server Name:**", `${message.guild.name}`, true)
    .setFooter(`MYTHIC Clan`, bot.user.displayAvatarURL);
    sChannel.send({embed: ssEmbed});
    message.channel.send("Your report has been filed to the staff team. Thank you!").then(m => m.delete(15000))


}

module.exports.config = {
    name: "report",
    description: "reports a user of the guild",
    usage: "!report <user> <reason>",
    accessableby: "Members",
    aliases: []
}