const Discord = require("discord.js");
const ms = require("ms");
module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("SEND_MESSAGES")) return message.reply("Sorry you don't have permission to stream!").then(m => {m.delete(15000)});
  let stream = message.guild.member(message.author || message.guild.members.get(args[0]));
  let reason = args.slice(0).join(" ");
  if(!reason) return message.reply("Please supply a link to your stream!").then(m => {m.delete(15000)});
  message.channel.send(`${stream} is now **__🛑LIVE🛑__**!! Check out their stream @ **__${reason}__**!!!`)
  
  let streamembed = new Discord.RichEmbed()
  .setDescription(`Started Streaming`)
  .setColor("#0e2b82")
  .addField("User Streaming:", stream)
  .addField("Link:", reason)
  .setFooter("🔑Join discord.gg/eNrCSvu for Support!🔑")
  .setImage("https://cdn.discordapp.com/attachments/658703270851903508/660182077467263008/tenor.gif")
  .setTimestamp()

  let channel = message.guild.channels.find(channel => channel.name === 'streams');
  if(!channel) return message.reply("Please create a `streams` channel first!");
  channel.send(streamembed);
  };
module.exports.help = {
  name: "startstream"
}
