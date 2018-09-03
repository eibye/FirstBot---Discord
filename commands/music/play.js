const commando = require('discord.js-commando');
const YTDL = require('ytdl-core');

function Play(connection, message) {
    var server = servers[message.guild.id];
    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
    server.queue.shift();

    server.dispatcher.on("end", function() {
        if (server.queue[0]) {
            Play(connection, message);
        }
        else {
            connection.disconnect();
        }
    });
}

class PlayCommand extends commando.Command {
    constructor(client) {
        super(client,{
            name: 'play',
            group: 'music', 
            memberName: 'play',
            description: 'Plays the current songs that are in the queue'
        })
    }

    async run(message, args) {
        
            if(!args) {
                message.channel.sendMessage("Please provide a link!");
            }

            if(!servers[message.guild.id]) {
                servers[message.guild.id] = {queue: [] }
            }

            var server = servers[message.guild.id];
            server.queue.push(args);

            message.member.voiceChannel.join().then(function(connection) {
                Play(connection, message);
            })

    }
}

module.exports = PlayCommand;