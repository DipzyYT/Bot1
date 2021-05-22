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
       
        if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(noPerms)
        message.delete();
        const user = message.mentions.users.first();

        if (!user) return message.channel.send(noMember);

        user.send(args.slice(1).join(" "))
    }

 }



        
