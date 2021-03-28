const { MessageEmbed } = require("discord.js");
const stark = require("../stark.json");

exports.execute = async(client, message, args, ayar, emoji) => {
	let starkuser = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
 let embed = new MessageEmbed().setAuthor(message.member.displayName, message.member.user.avatarURL({dynamic: true})).setTimestamp().setColor(stark.renk).setFooter(stark.footer);
     if (!message.member.roles.cache.has(stark.transport) && !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(embed.setDescription(`Bu komutu kullanmak Gerekli Yetkiye Sahip Değilsin`)).then(x => x.delete({timeout: 10000}));
  if (!starkuser) return message.channel.send(embed.setDescription("Ses odasına gidilecek üyeyi belirtmelisin!")).then(x => x.delete({timeout: 5000}));
  if (!message.member.voice.channel || !starkuser.voice.channel || message.member.voice.channelID == starkuser.voice.channelID) return message.channel.send(embed.setDescription("Belirtilen üyenin ve kendinin ses kanalında olduğundan emin ol!")).then(x => x.delete({timeout: 5000}));
 else {
    const reactionFilter = (reaction, user) => {
      return ['✅'].includes(reaction.emoji.name) && user.id === starkuser.id;
    };
    message.channel.send(`${starkuser}`, {embed: embed.setAuthor(starkuser.displayName, starkuser.user.avatarURL({dynamic: true, size: 2048})).setDescription(`${message.author} senin ses kanalına girmek için izin istiyor! Onaylıyor musun?`)}).then(async msj => {
      await msj.react('✅');
      msj.awaitReactions(reactionFilter, {max: 1, time: 15000, error: ['time']}).then(c => {
	let cevap = c.first();
	if (cevap) {
	  message.member.voice.setChannel(starkuser.voice.channelID);
          msj.delete();
	};
      });
    });
  };
};
exports.conf = {
  command: "git",
  description: "",
  aliases: ["git"]
}