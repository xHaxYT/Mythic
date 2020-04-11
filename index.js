
const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const colours = require("./colours.json");
const bot = new Discord.Client({ disableEveryone: true });

bot.on("ready", async () => {
  console.log("Bot is online");
  bot.user.setActivity("Testing", { type: "STREAMING" });
});

bot.on("message", async message => {
  if (message.author.bot || message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  //test command
  if (cmd === "!status") {
    return message.channel.send(":white_check_mark: I'm alive.");
  }

  //help command
  if (cmd === "!help") {
    let sEmbed = new Discord.RichEmbed()
      .setColor(colours.lime)
      .setTitle("List of Commands")
      .addField("**!help**", "Send you list of commands")
      .addField("**!status**", "See if is bot running");
    return message.author.send({ embed: sEmbed });
  }
});

bot.login(botconfig.token);
