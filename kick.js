const { SlashCommandBuilder, EmbedBuilder, PermissionBitField, PermissionsBitField, client, interaction } = require("discord.js")



module.exports = {

  
    
    
    data: new SlashCommandBuilder()
    .setName("kick")
    .setDescription("Kicks member from guild")
    .addUserOption( option => option
        .setName("user")
        .setDescription("user you want to kick")
        .setRequired(true))
        .addStringOption( option => option 
            .setName("reason")
            .setDescription("reason for kicking the member")
            .setRequired(false)),


            
            
           
            run: async({ interaction, client, permissionbitfield, c, handler }) => {

                
                
               
                const targetUserId = interaction.options.get("user").value;
                const reason = interaction.options.get("reason")?.value || "No Reason Given"

                await interaction.deferReply();

                const targetUser = await interaction.guild.members.fetch(targetUserId)

                if (!targetUser) {
                    await interaction.editReply("The User Is Not Present In The Server")
                    return;
                }

                const ownerKicked = new EmbedBuilder().setColor("Aqua").setDescription(`Server Owner Can't Be Kicked`)

                if (targetUser.id === interaction.guild.ownerId) {
                    await interaction.editReply({ embeds: [ownerKicked] })
                    return;
                }

                



                const targetUserRoleLevel = targetUser.roles.highest.position
                const requestUserRoleLevel = interaction.member.roles.highest.position
                const botRoleLevel = interaction.guild.members.me.roles.highest.position
                

                const cantKiced = new EmbedBuilder()
                .setColor("Aqua")
                .setDescription("You Can't Kick The User Because They Have Same Or Above Role Then You")

                if (targetUserRoleLevel >= requestUserRoleLevel) {
                    await interaction.editReply({ embeds: [cantKiced] })
                    return;
                }

                const sameRole = new EmbedBuilder().setColor("Aqua").setDescription(`I Can't Kick The User As They Have Same Or Above Role Then Me`)

                if (targetUserRoleLevel >= botRoleLevel) {
                    await interaction.editReply({ embeds: [sameRole] })
                    return;
                }

                const kickEmbbed = new EmbedBuilder().setColor("Aqua").setDescription(`The ${targetUser} has been kicked from the guild \n Reason: ${reason}`)
                
                
    
                    


                try {
                    await targetUser.kick(reason);
                    await interaction.editReply({ embeds: [kickEmbbed] })


                } catch (error) {
                    console.log(`Error Found While Kickin The User ${error}`)


                }
                if (!interaction.member.permissions.has(PermissionsBitField.Flags.KickMembers)) return await 
                interaction.reply({ content: "You Need `Kick Members` Permission To Execute This Command"})
            }

        }