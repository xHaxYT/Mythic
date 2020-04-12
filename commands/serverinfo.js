const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");


module.exports.run = async (bot, message, args) => {
    let sEmbed = new Discord.RichEmbed()
    .setColor(colours.cyan)
    .setTitle("Server Info")
    .setThumbnail(message.guild.iconURL)
    .setAuthor(`${message.guild.name} Info`, message.guild.iconURL)
    .addField("**Server Name:**", `${message.guild.name}`, true)
    .addField("**Server Owner:**", `${message.guild.owner}`, true)
    .addField("**Server Co-Owner:**", `<@590156078873051137>`, true)
    .addField("**Server Admins:**", `<@524636777365897217> <@599207772176777227>`, true)
    .addField("**Member Count:**", `${message.guild.memberCount}`, true)
    .setFooter(`MYTHIC Clan`, bot.user.displayAvatarURL);
    message.channel.send({embed: sEmbed});
}


module.exports.config = {
    name: "serverinfo",
    description: "Pulls the serverinfo of the guild!",
    usage: "!serverinfo",
    accessableby: "Members",
    aliases: ["si", "serverdesc"]
}