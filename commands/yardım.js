const {EmbedBuilder, ActionRowBuilder, SelectMenuBuilder} = require("discord.js");
const config = require("../config.js")
let prefix = config.prefix
exports.run = async (client, message, args) => {

const row = new ActionRowBuilder()
    .addComponents(
      new SelectMenuBuilder()
      .setCustomId("yardım")
      .setPlaceholder('Yardım Menüsüne Hoşgeldin!')
      .setMinValues(1)
      .setMaxValues(1)
      .addOptions([
       
 
        {
          label:"Anamenü" ,
          description:"Ana Menü",
          value:"anamenü",
          emoji:"869707733685927936"
        },
        {
          label:"Moderasyon" ,
          description:"Moderasyon Komutları",
          value:"moderasyon",
          emoji:"869707733685927936"
        },
        {
          label:"Kullanıcı",
          description:"Kullanıcı komutları",
          value:"kullanıcı",
          emoji:"869707733685927936"
        }
      
        
        ])
      )
    
    let embed = new EmbedBuilder()
.setTitle("***Yardım Menüsü***")
.setDescription(`**Yardım Menüsüne Hoşgeldin!**

**Anamenü için:**

**Moderasyon Komutları İçin:**

**Kullanıcı Komutları için:** `)
message.channel.send({embeds: [embed], components: [row]})


};
exports.conf = {
  aliases: ["help","y"]
};

exports.help = {
  name: "yardım"
};