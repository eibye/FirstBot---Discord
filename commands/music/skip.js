const commando = require('discord.js-commando');
const YTDL = require('ytdl-core');

class SkipSongCommand extends commando.Command {
    constructor(client) {
        super(client,{
            name: 'skip',
            group: 'music', 
            memberName: 'skip',
            description: 'Skips the current playing song'
        })
    }

    async run(message, args) {
        if(message.member.voiceChannel) {
            if(!message.guild.voiceConnect) {
                var server = servers[message.guild.id];

                if(message.guild.voiceConnection) message.guild.voiceConnection.disconnect();

            }
        }
        else {
            message.reply("you must be in a voice channel to stop me!");
        }
    }
}

module.exports = SkipSongCommand;