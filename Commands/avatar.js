const { MessageEmbed } = require('discord.js');
const Discord = require("discord.js")
const ayar = require("../stark.json");
const stark = require("../stark.json");

exports.execute = async  (client, message, args) => {
 let starkuser = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
	 let avatar = starkuser.avatarURL({ dynamic: true, size: 2048 });
    let embed = new MessageEmbed()
  .setFooter(`${message.member.displayName} tarafından istendi!`, message.author.avatarURL({ dynamic: true }))
	.setDescription(`[Resim Adresi](${avatar})`)
	.setImage(avatar)
	message.channel.send(embed).then(x => x.delete({timeout:100})).catch(e => { })
};

exports.conf = {
  command: "avatar",
  description: "",
  aliases: ["pp"]
}