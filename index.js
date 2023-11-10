require("dotenv").config()
const { Client, Events, GatewayIntentBits, EmbedBuilder, ActivityType } = require("discord.js");
const { CommandKit } = require("commandkit");
const path = require("node:path");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
    ]
})





client.snipes = new Map()
client.on(`messageDelete`, function(message, channel){
    client.snipes.set(message.channel.id, {
        content: message.content,
        author: message.author,
        Image: message.attachments.first() ? message.attachments.first().proxyURL : null
    })
})


client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isStringSelectMenu()) return

        const { customId } = interaction;

        if (customId === "starter") {
            const selectedValue = interaction.values[0];

            if (selectedValue === "misc") {
                const miscEmbed = new EmbedBuilder()
                .setTitle('Miscellaneous Commands')
                .setDescription('** <a:misc:1171843248294211644> Here is the information about the DiscPart misc commands**')
                .addFields({ name: " <a:arrowright:1143391635078647818> Ping", value: "Checks the bot ping", inline: true })
                .addFields({ name: " <a:arrowright:1143391635078647818> Avatar", value: "Get a user avatar", inline: true })
                .addFields({ name: " <a:arrowright:1143391635078647818> Userinfo", value: "Get information about a user", inline: true })
                .addFields({ name: " <a:arrowright:1143391635078647818> Invite", value: "Invite discpart to your server", inline: true })
                .addFields({ name: "<a:arrowright:1143391635078647818> Flip", value: "Flips a coin", inline: true })
                .setColor('Aqua');

                await interaction.reply({ embeds: [miscEmbed], ephemeral: true });
            }
        }
})

new CommandKit({
    client,
    commandsPath: path.join(__dirname, `commands`),
    eventsPath: path.join(__dirname, `events`),
    devGuildIds: ["1124718241839853610"],
    bulkRegister: true
})






client.login(process.env.token)