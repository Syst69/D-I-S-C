const { SlashCommandBuilder, EmbedBuilder,  ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("avatar")
    .setDescription("fetch a user avatar")
    .addUserOption( option => option 
        .setName("user")
        .setDescription("select a user for avatar")
        .setRequired(true))
        .setDMPermission(false),
    

        run: async ({ client, interaction, handler, events, c, message }) => {

            if (!interaction.guild) {
                await interaction.reply('This command can only be used in guilds.');
                return;
              }

            let user = interaction.options.getUser("user") || interaction.member;
            let userAvatar = user.displayAvatarURL({ size: 512})
            const avatar = user.avatar
            const tag = user.tag
            const icon = user.displayAvatarURL();
          
            

            const avatarEmbed = new EmbedBuilder()
            .setAuthor({ name: tag, iconURL: icon })
            .setTitle("Avatar Fetched")
            .setColor("Aqua")
            .setImage(`${userAvatar}`)
            .setTimestamp()
            .setFooter({ text: `Avatar of ${tag}` })

            const avButton = new ButtonBuilder()
            .setLabel("Avatar")
            .setStyle(ButtonStyle.Link)
            .setURL(`${user.avatarURL({ size: 512})}`)

            const avRow = new ActionRowBuilder().addComponents(avButton)

            await interaction.reply({ 
                embeds: [avatarEmbed],
                components: [avRow]
            })


        }



}