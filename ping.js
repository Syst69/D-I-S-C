const { SlashCommandBuilder, client, EmbedBuilder } = require("discord.js");
require("dotenv").config();




module.exports = {
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Show's The Bot Latency"),
    
    run: async ({ interaction, client, handler }) => {
        await interaction.deferReply();

       


        const reply = await interaction.fetchReply();
        const ping = reply.createdTimestamp - interaction.createdTimestamp;
        
        const pingEmbed = new EmbedBuilder()
        .setColor("Aqua")
        .setTitle("Ping Fetched")
        .setDescription(` WebSocket Ping <:aqua_arrow:1170252064576786492> ${client.ws.ping}ms \n Client Ping <:aqua_arrow:1170252064576786492> ${ping}ms`)
        .setTimestamp()
        .setThumbnail("https://media.discordapp.net/attachments/1169313124554375229/1171095834146906143/discpart.gif?ex=655b6efc&is=6548f9fc&hm=cb3ec9b7c32ad53c09b83aa184a5b916d0476a31bd871fce9fa2663cfb2913b0&=&width=504&height=497")

        interaction.editReply({ embeds: [pingEmbed]})
        await interaction.editReply(reply.content);
    },
};

// `<:green_tick:1170262701373669417> DiscPart Ping \n <:point_blue:1170387959493697536> Client Ping <:aqua_arrow:1170252064576786492> ${ping}ms \n <:point_blue:1170387959493697536> Websocket Ping <:aqua_arrow:1170252064576786492> ${client.ws.ping}`

//<:aqua_arrow:1170252064576786492>