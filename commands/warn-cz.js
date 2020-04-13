const Discord = require("discord.js")
const colours = require("../colours.json")

module.exports.run = async (bot, message, args) => {

    
    // mentioned or grabbed user
    let target = message.mentions.members.first() || message.guild.members.get(args[0])
    if(!target) return message.channel.send("Please provide a valid user").then(m => m.delete(15000))

    // reasoning definition
    let reason = args.slice(1).join(" ")
    if(!reason) return message.channel.send(`Please provide a reason for warning **${target.user.tag}**`).then(m => m.delete(15000))

    // grab reports channel
    let sChannel = message.guild.channels.find(x => x.name === "【🚨】warnings")

    // send to reports channel and add tick or cross

    let ssEmbed = new Discord.RichEmbed()
    .setColor(colours.red)
    .setAuthor(`[WARN] ${target.user.tag}`, target.user.displayAvatarURL)
    .setTimestamp()
    .addField("**Warned User**", `**${target.user}**`, true)
    .addField("**Moderator**", `**${message.author}**`, true)
    .addField("**Reason**", `**${target.user.tag}** dostal si varování za **${reason}**. Do not do it again! Thank you, *MYTHIC Staff team*` , true)
    .setFooter(`MYTHIC Clan`, bot.user.displayAvatarURL);
    sChannel.send({embed: ssEmbed})
    message.channel.send("User has been warned!").then(m => m.delete(15000))


}

module.exports.config = {
    name: "warn",
    description: "warn a user",
    usage: "!warn <user> <reason>",
    accessableby: "Members",
    aliases: []
}