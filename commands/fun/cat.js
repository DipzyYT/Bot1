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
        let msg = await message.channel.send('Generating...')

        let { body } = await superagent
            .get('https://aws.random.cat/meow')
        if (!{ body }) return message.channel.send('I can´t!')
    
        const catEmbed = new MessageEmbed()
    
    
            .setAuthor('cat!', message.author.displayAvatarURL())
            .setColor(color)
            .setImage(body.file)
            .setTimestamp()
    
        message.channel.send(catEmbed)
    
        msg.delete();
    }
}

