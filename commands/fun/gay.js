const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'embed',
    description : 'Create Embeds to announce something',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        console.log(bot.locked.get(message.channel.id))
        let gayMember = message.mentions.users.first()
        if (!gayMember) gayMember = message.author
        const gayEmbed = new MessageEmbed()
            .setColor(color)
            .setDescription(`${gayMember.tag} is ${Math.floor(Math.random() * 100)}% gay!`)
    
        message.channel.send(gayEmbed)
    }
}

