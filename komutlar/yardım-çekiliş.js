const Discord = require("discord.js")
module.exports.run= async(client, message, args) => {
let cse = new Discord.MessageEmbed()//discord.gg/turkiye
.setTitle(client.user.username+" Yardım Menüsü")
.setColor("BLUE")
.setThumbnail(client.user.avatarURL())
.setDescription(`[OYVER](https://top.gg/bot/756883309270663229/vote)
**Strom Müzik botunu eklemek için [TIKLA](https://discord.com/api/oauth2/authorize?client_id=854122011151826975&permissions=8&scope=bot%20applications.commands)
**Onay sürecinde olduğu için bazı komutlar çalışamaz!**


🎉 **s!reroll**  \`Çekilişi yeniler.\` \n
🎉 **s!sonlandır**  \`Çekilişi Sonlandırır.\` \n
🎉 **s!başlat**  \`Çekilişi Başlatır.\` \n


`)
.setFooter("Strom / Discord'da Yeni Devrim \nherhangi bir hatada s!hata (hata)\nönerileriniz için s!öneri (öneriniz)")
.setTimestamp()
message.channel.send(cse)
}
module.exports.conf = {
aliases: ["çekiliş-sistemi"]
}

module.exports.help = {
name: "yardım-çekiliş",
usage: "!yardım-çekiliş"

};