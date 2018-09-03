const commando = require('discord.js-commando');
const discord = require('discord.js');

class InfoAboutMeCommand extends commando.Command {
    constructor(client) {
        super(client,{
            name: 'info',
            group: 'simple', 
            memberName: 'info',
            description: 'Learn a little more about me!'
        })
    }

    async run(message, args) {
        var myInfo = new discord.RichEmbed()
            .addField("About me", "Hello, my name is Alex.", true)
            .addField("Favorite color", "Red", true)
            .setDescription("Hello, my name is Alex!")
            .setColor(0xFF0000)
            .setThumbnail(message.author.avatarURL)
            .setFooter("Thanks for reading. I hope you learned a little about me!")

        message.channel.sendEmbed(myInfo);
    }
}

module.exports = InfoAboutMeCommand;