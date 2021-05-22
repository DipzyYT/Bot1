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
            .get('https://dog.ceo/api/breeds/image/random')
        console.log(body.file)
        if (!{ body }) return message.channel.send('I can´t')
    
        const dogEmbed = new MessageEmbed()
    
    
            .setAuthor('dog!', message.author.displayAvatarURL())
            .setColor(color)
            .setImage(body.message)
            .setTimestamp()
    
    
        message.channel.send(dogEmbed).then(msg => msg.delete({timeout: "10000"}));
    
        msg.delete();
    }
}


   

