const Discord = require("discord.js");
const client = new Discord.client({
    intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGE_TYPING"],
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
const chalk = require('chalk');
const dotenv = require('dotenv');
const faq = "<#>";
const { prefix, ownerid } = require('config.json');
dotenv.config();
client.on('ready', () => {
    console.log(chalk.greenBright('[SUCCESS]'), 'QwertyBot is now initilized!');
});
client.login(process.env.token);
client.on('messageCreate', message) => {
    if (message.author.bot) return;
    // People Stuffs
    /*if (message.content.toLowerCase().include('how')) {
        message.reply(faq);
        console.log(message.author.username + " --> how");
    }
    if (message.content.toLowerCase().include('help')) {
        message.reply(faq);
        console.log(message.author.username + " --> help");
    }*/
    if (message.content.toLowerCase().include('crash')) {
        message.reply('skill issue');
        console.log(message.author.username + " --> crash");
    }
    if (message.content.toLowerCase().include('dead chat')) {
        message.reply('then make it alive');
        console.log(message.author.username + " --> dead chat");
    }
    if (message.content.toLowerCase().include('uwu')) {
        message.reply('no ur gay');
        console.log(message.author.username + " --> uwu");
    }
    if (message.content.toLowerCase().include('owo')) {
        message.reply('no ur gay');
        console.log(message.author.username + " --> owo");
    }
    if (message.content.toLowerCase.include('cock and balls')) {
        message.reply('my cock and balls are rotating');
        console.log(message.author.username + " --> cock and balls");
    }
    if (message.content.toLowerCase().include('retarded')) {
        message.reply('no ur retard');
        console.log(message.author.username + " --> retarded");
    }
    if (message.content.toLowerCase().include('dickweed')) {
        message.reply('u suck at ur dick')
        console.log(message.author.username + " --> dickweed");
    }
    if (message.content.toLowerCase().include('grammar')) {
        message.reply('english issue');
        console.log(message.author.username + " --> grammar");
    }
    if (message.content.toLowerCase().include('pedo')) {
        message.reply('no ur pedo kid')
        console.log(message.author.username + " --> pedo");
    }
    if (message.content.toLowerCase().include('??')) {
        message.reply('no ur bozo');
        console.log(message.author.username + " --> ??");
    }
    if (message.content.toLowerCase().include('bozo')) {
        message.reply('no ur bozo');
        console.log(message.author.username + " --> bozo");
    }
    if (message.content.toLowerCase().include(':clown:')) {
        message.reply('no ur bozo');
        console.log(message.author.username + " --> :clown:");
    }
    if (message.content.toLowerCase().include(':middle_finger:')) {
        message.reply('fuck ur ass');
        console.log(message.author.username + " --> :middle_finger:");
    }
    if (message.content.toLowerCase().include("<@" + ownerid + ">")) {
        message.reply('ping ur self');
        console.log(message.author.username + " --> ping to owner");
    }
    if (!message.content.toLowerCase().startsWith(prefix)) return;
    switch(prefix + message.content.toLowerCase()) {
        default:
            message.reply('Unknown Command. Sorry!')
            break;
        // todo
    }
}