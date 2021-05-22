const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'embed',
    description : 'Create Embeds to announce something',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(message) => {
        
        const channel = message.mentions.channels.first();

        if (!channel) return message.channel.send(noChannel);
    
        const mainRole = message.guild.roles.everyone.id
        bot.locked.set(channel.id, {
            perms: channel.permissionOverwrites
        })
    
        channel.createOverwrite(mainRole, {
            SEND_MESSAGES: false
        }).then(() => {
            const locked = new MessageEmbed()
                .setColor(color)
                .setDescription("The Channel has been locked!");
            message.channel.send(locked);
        })
    }
}






