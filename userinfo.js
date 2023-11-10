const { Client, Events, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js")

module.exports =  async( asyncclient, events, message) => {

    if (message.content === "!userinfo") {
        const user = args.user || message.member;
    const member = await message.guild.members.fetch(user.id);
    const icon = user.displayAvatarURL();
    const avatar = user.avatar;
    const tag = user.tag;
    const userType = user.bot ? "Bot" : "Human";

    const userInfoEmbed = new EmbedBuilder()
      .setColor("Aqua")
      .setAuthor({ name: tag, iconURL: icon })
      .setThumbnail(icon)
      .addFields({ name: "User", value: `${user}`, inline: false })
      .addFields({ name: "User Type", value: `${userType}` })
      .addFields({ name: "Top Role", value: `${member.roles.highest.name}`, inline: true })
      .addFields({ name: "Total Roles", value: getTotalRoles(member), inline: false })
      .addFields({ name: "Joined Server", value: `<t:${parseInt(member.joinedAt / 1000)}:R>`, inline: true })
      .addFields({ name: "Account Created", value: `<t:${parseInt(user.createdAt / 1000)}:R>`, inline: true })
      .setFooter({ text: `Requested By ${message.author.tag}` });

    const avatarButton = new ButtonBuilder()
      .setLabel("Avatar")
      .setStyle(ButtonStyle.Link)
      .setURL(user.displayAvatarURL({ dynamic: true, size: 2048 }));

    const avatarRow = new ActionRowBuilder().addComponents(avatarButton);

    try {
      await message.reply({ embeds: [userInfoEmbed], components: [avatarRow] });
    } catch (error) {
      console.error(error);
    }

    // Helper function to get total roles or too many roles message
    function getTotalRoles(member) {
      const totalRoles = member.roles.cache.size - 1; // Subtract 1 to exclude @everyone role
      return totalRoles <= 9 ? `${member.roles.cache.map(r => r).join(' ')}` : "Too many Role To Display";
    }
    }
    
}



