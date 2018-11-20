const Discord = require("discord.js");
const client = new Discord.Client();

client.on("messageDelete", (messageDelete) => {
 messageDelete.channel.send('DELETE')
});

client.login(process.env.BOT_TOKEN);
