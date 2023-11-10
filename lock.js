const { SlashCommandBuilder, EmbedBuilder, PermissionFlagBits, ChannelType, PermissionsBitField } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("lock")
        .setDescription("lockdown's a channel")
        .addChannelOption(option => option
            .setName("channel")
            .setDescription("channel you want to lock")
            .addChannelTypes(ChannelType.GuildText)
            .setRequired(false)),
    run: async ({ interaction, client, handler }) => {
        if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageChannels))
            return await interaction.reply({ content: "You Need `Manage Channels` Permission To Execute This Command", ephermal: true });

        let channel = interaction.options.getChannel("channel") || interaction.channel;
        channel.permissionOverwrites.create(interaction.guild.id, { SendMessages: false });

        const locked = new EmbedBuilder()
            .setTitle("Channel Locked")
            .setDescription(`The ${channel} Has Been Locked Successfully`)
            .setColor("Aqua")
            .setTimestamp();

        await interaction.reply({ embeds: [locked] });
    }
};