const { SlashCommandBuilder, PermissionBitField, PermissionsBitField, client, interaction } = require("discord.js")
const { EmbedBuilder } = require("discord.js");






module.exports = {

  
    
    
    data: new SlashCommandBuilder()
    .setName("ban")
    .setDescription("Bans member from guild")
    .addUserOption( option => option
        .setName("user")
        .setDescription("user you want to ban")
        .setRequired(true))
        .addStringOption( option => option 
            .setName("reason")
            .setDescription("reason for banning the member")
            .setRequired(false)),


        
        
            
            
           
            run: async({ interaction, client, permissionbitfield, c, handler, EmbedBuilder }) => {


              
                if (!interaction.guild) {
                    await interaction.reply('This command can only be used in guilds.');
                    return;
                  }
                
               
                const targetUserId = interaction.options.get("user").value;
                const reason = interaction.options.get("reason")?.value || "No Reason Given"

                await interaction.deferReply();

                const targetUser = await interaction.guild.members.fetch(targetUserId)

                if (!targetUser) {
                    await interaction.editReply("The User Is Not Present In The Server")
                    return;
                }

                if (targetUser.id === interaction.guild.ownerId) {
                    await interaction.editReply(`${targetUser} is the server owner and can't be banned`)
                    return;
                }

                const targetUserRoleLevel = targetUser.roles.highest.position
                const requestUserRoleLevel = interaction.member.roles.highest.position
                const botRoleLevel = interaction.guild.members.me.roles.highest.position

                if (targetUserRoleLevel >= requestUserRoleLevel) {
                    await interaction.editReply("You Cant Ban The User Because They Have Same Or Above Role Hirachy Then You")
                    return;
                }

                if (targetUserRoleLevel >= botRoleLevel) {
                    await interaction.editReply("I Can't Ban The User Because They Have Same Or Above Role Then Me")
                    return;
                }

                
    

                try {
                    await targetUser.ban({ reason });
                    await interaction.editReply(`${targetUser} Has Been Banned From The Guild \n Reason: ${reason}`)


                } catch (error) {
                    console.log(`Error Found While Banning The User ${error}`)
                }
                if (!interaction.member.permissions.has(PermissionsBitField.Flags.BanMembers)) return await 
                interaction.reply({ content: "You Need `Ban Members` Permission To Execute This Command"})
            }

        }


