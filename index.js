const Commando = require('discord.js-commando');
const discord = require('discord.js');
const bot = new Commando.Client();
const TOKEN = '';

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerGroup('team', 'Team');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

global.currentTeamMembers = [];
global.servers = {};


bot.on('message', function(message){
    if(message.content == 'Hello'){
        message.channel.sendMessage("Hello, " + message.author + '!');
    }
    else if(message.content == "What's the current team?"){
        message.channel.send(currentTeamMembers);
        var teamInfo = new discord.RichEmbed()
            .setTitle("Current Team Members");

        for(var i = 0; i < currentTeamMembers.length; i++) {
             teamInfo.addField("Member #" + i.toString(), currentTeamMembers[i].username);
         }

         message.channel.send(teamInfo);
    }
});

bot.on('ready', function(){
    console.log("Ready");
})

bot.login(TOKEN);
