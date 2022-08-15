const {EmbedBuilder, ActionRowBuilder, SelectMenuBuilder} = require("discord.js");
const config = require("../config.js")
let prefix = config.prefix
exports.run = async (client, message, args) => {

const row = new ActionRowBuilder()
    .addComponents(
      new SelectMenuBuilder()
      .setCustomId("yardım")
      .setPlaceholder('Yardım Menüsü Komutları')
      .setMinValues(1)
      .setMaxValues(1)
      .addOptions([
       
 
        {
          label:"Anamenü" ,
          description:"Ana Menü",
          value:"anamenü",
          emoji:"<:729507302760792:1008829417394552923>"
        },
        {
          label:"Moderasyon" ,
          description:"Moderasyon Komutları",
          value:"moderasyon",
          emoji:"<:780436202360632:1008829011499176167>"
        },
        {
          label:"Kullanıcı",
          description:"Kullanıcı komutları",
          value:"kullanıcı",
          emoji:"<:7390464307626:1008830365789593692>"
        }
      
        
        ])
      )
    
    let embed = new EmbedBuilder()
.setTitle("***Yardım Menüsü***")
.setDescription(`**Yardım Menüsüne Hoşgeldin!**

**Anamenü için:** <:729507302760792:1008829417394552923>

**Moderasyon Komutları İçin:** <:780436202360632:1008829011499176167>

**Kullanıcı Komutları için:** <:7390464307626:1008830365789593692>`)
message.channel.send({embeds: [embed], components: [row]})


};
exports.conf = {
  aliases: ["help","y"]
};

exports.help = {
  name: "yardım"
};