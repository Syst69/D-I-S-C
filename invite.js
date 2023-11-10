const { SlashCommandBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require("discord.js")

module.exports = {  
    data: new SlashCommandBuilder()
    .setName("invite")
    .setDescription("invite discpart to your server"),

    run: async ({ client, interaction, c, handler }) => {


        const inviteEmbed = new EmbedBuilder()
        .setTitle("Invite DiscPart")
        .setDescription("Bring DiscPart, your versatile command companion, to your server with just a click! \n Enjoy a range of features designed to enhance your server experience. From moderation tools to fun commands, DiscPart has you covered")
        .addFields({ name: "Invite Here", value: `[Click Me](https://discord.com/api/oauth2/authorize?client_id=1166051307602313297&permissions=8&scope=bot%20applications.commands)`, inline: false})
        .setColor("Aqua")
        .setImage("https://cdn.discordapp.com/attachments/1164460270618411008/1164960356330897531/bruuh.jpg?ex=65451ce0&is=6532a7e0&hm=a875245df1f8598195f1defd6bf93978c1e8a30eb2d91667b5cb5ad0bea54bf5&")
        .setThumbnail("https://images-ext-1.discordapp.net/external/_znZPUtuNKY4JLLqpIJMCUBJwQWhayeU5FwMrzgRo0c/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1166051307602313297/a0571ba3a337948ef115d59ddd09cc65.png?width=497&height=497")

        

        const inviteButton = new ButtonBuilder()
        .setLabel('Invite Me')
        .setURL("https://discord.com/api/oauth2/authorize?client_id=1166051307602313297&permissions=8&scope=bot%20applications.commands")
        .setStyle(ButtonStyle.Link)

        const inviteRow = new ActionRowBuilder()
        .addComponents(inviteButton)

        await interaction.reply({
            embeds: [inviteEmbed],
            components: [inviteRow]
        })



    }
}