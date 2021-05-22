const { Client, Message, MessageEmbed, Channel } = require('discord.js');

module.exports = {
    name: 'info',
    description : 'THe Info of the Bot',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {

        const Embed = new MessageEmbed()
        .setTitle("Info")
        .setDescription("**The Bot** is coded by `Dipzy#4425`")
        .setThumbnail("https://cdn.discordapp.com/attachments/726700428045189130/845406239381782588/discord-avatar-128-WH5L4.gif")
        .setTimestamp()
        message.channel.send(Embed);

    }
}