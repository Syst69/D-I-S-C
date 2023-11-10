const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("flip")
    .setDescription("flips a coin"),

run: async({ interaction, client, c, handler, SlashCommandBuilder }) => {

    if (!interaction.guild) {
        await interaction.reply('This command can only be used in guilds.');
        return;
      }

            const flipHeadEmbed = new EmbedBuilder()
            .setColor("Aqua")
            .setTitle(`${client.user.tag} CoinFlip`)
            .setDescription("And The Result Is `Heads`")
            .setThumbnail("https://media.discordapp.net/attachments/1169313124554375229/1171105809300738048/coinflip_main.gif?ex=655b7847&is=65490347&hm=fa36d680ce7a9af3c4802e8d1c640067d802c5fab9ffeb7302df0e34edd41b02&=&width=140&height=140")
            .setTimestamp()

            const flipTailEmbed = new EmbedBuilder()
            .setColor("Aqua")
            .setTitle(`${client.user.tag} CoinFlip`)
            .setDescription("And The Result Is `Tails`")
            .setThumbnail("https://media.discordapp.net/attachments/1169313124554375229/1171105809300738048/coinflip_main.gif?ex=655b7847&is=65490347&hm=fa36d680ce7a9af3c4802e8d1c640067d802c5fab9ffeb7302df0e34edd41b02&=&width=140&height=140")
            .setTimestamp()

    const num = Math.random() * 2
    if (num > 1) return await interaction.reply({ embeds: [flipHeadEmbed] })
    else return interaction.reply({ embeds: [flipTailEmbed] })
}


}
