const Discord = require("discord.js")
const colours = require("../colours.json")

module.exports.run = async (bot, message, args) => {

    message.delete()

    let name = args.slice(0).join(" ")
    if(!name) return message.channel.send("Input valid emoji name!").then(m => m.delete(15000))

    // reasoning definition
    let id = args.slice(1).join(" ")
    if(!id) return message.channel.send(`Input valid emoji ID!`).then(m => m.delete(15000))

    // send to reports channel and add tick or cross

    let eEmbed = new Discord.RichEmbed()
    .setColor(colours.red)
    .setAuthor(`${message.author.tag}`, message.auhtor.displayAvatarURL)
    .setTimestamp()
    .addField(`<:${name}:${id}`, true)
    .setFooter(`MYTHIC Clan`, bot.user.displayAvatarURL);
    message.channel.send(eEmbed)

}

module.exports.config = {
    name: "emoji",
    description: "emoji",
    usage: "!emoji <name> <id>",
    accessableby: "Members",
    aliases: ["emo"]
}