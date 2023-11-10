const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("snipe")
    .setDescription("snipes recent deleted message"),
 
    run: async({ client, handler, interaction }) => {

        const msg = client.snipes.get(interaction.channel.id);
        if (!msg) return await interaction.reply({ content: "No message has been deleted"})

        const ID = msg.author.id;
        const member = interaction.guild.members.cache.get(ID);
        const URL = member.displayAvatarURL()

        const embed = new EmbedBuilder()
        .setColor("Aqua")
        .setTitle(`Message Sniped`) 
        .setDescription(`${msg.content}`)
        .setTimestamp()
        .setFooter({ text: `Member ID: ${ID}`, iconURL: `${URL}`})
        

        if (msg.image) await interaction.reply({ content: "No Image Has Been Deleted"})
        try {
            await interaction.reply({ embeds: [embed] })
        } catch (error) {
            console.log(`There was an error called ${error}`)
        }
    }
}