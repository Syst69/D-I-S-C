const { SlashCommandBuilder, EmbedBuilder, PermissionFlagBits, ChannelType, PermissionsBitField } = require("discord.js");
module.exports = {
    data: new SlashCommandBuilder()
    .setName("unlock")
    .setDescription("Unlock A Channel")
    .addChannelOption( option => option
        .setName("channel")
        .setDescription("channel you want to unlock")
        .addChannelTypes(ChannelType.GuildText).setRequired(true)),
        run: async ({ interaction, client, handler }) => {
            if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageChannels)) return await 
            interaction.reply({ content: "You Need `Manage Channels` Permission To Execute This Command"})

            let channel = interaction.options.getChannel(`channel`);
            channel.permissionOverwrites.create(interaction.guild.id, { SendMessages: true })

            const unlocking = new EmbedBuilder()
            .setTitle("Channel Unlocked")
            .setDescription(`The ${channel} Has Been Unlocked Successfully`)
            .setColor("Aqua")
            .setTimestamp()
            

            await interaction.reply({ embeds: [unlocking] })
        }
} 