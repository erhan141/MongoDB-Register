const { MessageEmbed } = require('discord.js');
const stark = require("../stark.json");

exports.execute = async (client, message, args) => {

    let embed = new MessageEmbed().setAuthor(message.member.displayName, message.member.user.avatarURL({dynamic: true})).setTimestamp().setColor(stark.renk).setFooter(stark.footer);

    message.channel.send(embed.setDescription(`
    ${stark.prefix}avatar
    ${stark.prefix}afk
    ${stark.prefix}çek
    ${stark.prefix}e
    ${stark.prefix}k
    ${stark.prefix}git
    ${stark.prefix}isim
    ${stark.prefix}isimler
    ${stark.prefix}kayıtsız
    ${stark.prefix}info
    ${stark.prefix}komutlar
    ${stark.prefix}sil
    ${stark.prefix}top
    `));
    
};

exports.conf = {
    command: "komutlar",
    description: "",
    aliases: ["komutlar", "help"]
  }