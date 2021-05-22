if (command === 'unlock') {
    const channel = message.mentions.channels.first();

    if (!channel) return message.channel.send(noChannel);

    const mainRole = message.guild.roles.everyone.id

    channel.updateOverwrite(mainRole, {
        SEND_MESSAGES: null
    }).then(() => {
        const locked = new MessageEmbed()
            .setColor(color)
            .setDescription("The Channel has been unlocked!");
        message.channel.send(locked);
    })
}

