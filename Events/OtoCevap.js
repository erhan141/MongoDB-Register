const Discord = require('discord.js');
const stark = require("../stark.json")
exports.execute = async(message) => {

    if (message.content.toLowerCase() == "tag" || message.content.toLowerCase() === "Tag" || message.content.toLowerCase() === ".tag" || message.content.toLowerCase() === "!tag") {
        message.channel.send(`${stark.tag}`)
    };

 if (message.content.toLowerCase() == ".link" || message.content.toLowerCase() === "link" ) {
        message.channel.send(`${stark.link}`)
    };

};

exports.conf = {
    event: "message"
  }