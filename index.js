const Discord = require("discord.js");
const client = new Discord.Client();
require("dotenv").config();
const prefix ="!";
client.on("ready", () => {
    console.log("I'm ready !");
});

client.on("message", msg => {
    if (msg.content === "!prise") {
        msg.reply("vous êtes maintenant en service");
    }
});
client.on("message", msg => {
    if (msg.content === "!fin") {
        msg.reply("vous avez pris votre fin de service");
    }
});
client.on("message", message => {
     if (message.author.bot) return;
     if (message.channel.type =="dm") return;
     if (message.member.hasPermission("ADMINISTRATOR")){
         if(message.content.startsWith(prefix + "ban")){
             let mention = message.mentions.members.first();
             if(mention == undefined){
                 message.reply("Membre non ou mal mentionné.");

             }
             else{
                 if(mention.bannable){
                     mention.ban();
                     message.channel.send(mention.displayName + " a été banni avec succés");
                 }
                 else{
                     message.reply("impossible de bannir ce membre.");
                 }
             }
         } }
});
client.on("message", message => {
    if (message.author.bot) return;
    if (message.channel.type =="dm") return;
    if (message.member.hasPermission("ADMINISTRATOR")){
        if(message.content.startsWith(prefix + "kick")){
            let mention = message.mentions.members.first();
            if(mention == undefined){
                message.reply("Membre non ou mal mentionné.");

            }
            else{
                if(mention.kickable){
                    mention.kick();
                    message.channel.send(mention.displayName + " a été kick avec succés");
                }
                else{
                    message.reply("impossible de kick ce membre.");
                }
            }
        } }
});
client.on("message", message => {
    
        if(message.content.startsWith(prefix + "mute")){
            let mention = message.mentions.members.first();
            if(mention == undefined){
                message.reply("Membre non ou mal mentionné.");
            }
                else{
                    mention.roles.add("863766246755401748")
                    message.reply(mention.displayName +" a été mute avec succés")
                }              
            }
        } 
);
client.on("message", message => {
    
    if(message.content.startsWith(prefix + "demute")){
        let mention = message.mentions.members.first();
        if(mention == undefined){
            message.reply("Membre non ou mal mentionné.");
        }
            else{
                mention.roles.remove("863766246755401748")
                message.channel.send(mention.displayName +" a été demute avec succés")
            }              
        }
    } 
);
client.on("message", message => {
    
    if(message.content.startsWith(prefix + "tempmute")){
        let mention = message.mentions.members.first();
        if(mention == undefined){
            message.reply("Membre non ou mal mentionné.");
        }
            else{
                let args = message.content.split(" ");
                mention.roles.add("863766246755401748");
                setTimeout(function(){
                    mention.roles.remove("863766246755401748")
                    message.channel.send("<@" + mention.id +"> tu peux désormais de nouveau intéragir ")
                }, args [2]*1000);
            }              
        }
    } 
);
client.login(process.env.BOT_TOKEN);