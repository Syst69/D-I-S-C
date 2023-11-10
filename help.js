const { StringSelectMenuBuilder, StringSelectMenuOptionBuilder, SlashCommandBuilder, ActionRowBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('get help about discpart'),

  async run({ interaction, client, c, message }) {
    const help1 = new StringSelectMenuBuilder()
      .setCustomId('starter')
      .setPlaceholder('Choose a category')
      .addOptions([
        new StringSelectMenuOptionBuilder()
          .setLabel('Misc')
          .setDescription('Information about misc commands')
          .setValue('misc')
          .setEmoji("1172066959513362442"),
          new StringSelectMenuOptionBuilder()
          .setLabel('Moderation')
          .setDescription('Information about moderation commands')
          .setValue('moderation')
          .setEmoji("1172065064380018738"),
        new StringSelectMenuOptionBuilder()
          .setLabel('Activity')
          .setDescription('Information about activity commands')
          .setValue('activity')
          .setEmoji("1172065304449396777"),
      ]);

    const row1 = new ActionRowBuilder()
      .addComponents(help1);

    const helpEmbed = new EmbedBuilder()
      .setTitle('DiscPart Help')
      .setDescription(
        '`Your command companion, here to help you make the most of your server. With DiscPart,\n you have all the power you need at your fingertips. Explore the command page to discover all that DiscPart can do for you.`'
      )
      .setColor('Aqua')
      .setThumbnail('https://images-ext-1.discordapp.net/external/1c1e2rW3MKjGdwsXfjn45CVT-q1Oa9zfdf6WPX6U92s/%3Fsize%3D512/https/cdn.discordapp.com/avatars/1166051307602313297/a0571ba3a337948ef115d59ddd09cc65.webp?width=497&height=497');

    await interaction.reply({
      embeds: [helpEmbed],
      components: [row1],
    });

    // **New code:**

    // Respond to the interaction with the embed.
    await interaction.editReply({
      embeds: [helpEmbed],
      components: [row1],
    });
  },
};
