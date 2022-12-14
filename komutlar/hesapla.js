const Discord = require('discord.js');
const math = require('math-expression-evaluator')
const stripIndents = require('common-tags').stripIndents
const database = require('quick.db');
const db = require('quick.db');


exports.run = function(client, message, args) {
  
  var soru = args.join(' ');
    
    if(!soru) return message.reply('Bir işlem belirtin. **Doğru Kullanım**: !hesapla <işlem>')
    else { let cevap;
        try {
            cevap = math.eval(soru)
        } catch(err) {
            message.channel.send('Hatalı işlem: **' + err)
        }

        const embed = new Discord.MessageEmbed()
        .addField('Soru', soru)
        .addField('Cevap', cevap)
        .setColor("BLUE")
        .setFooter( "Strom / Discord'da Yeni Devrim!", client.user.avatarURL())

        message.channel.send(embed)
    }



      
      }, 

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'hesapla', 
  description: 'Matematik İçin Lazım Olacak.',
  usage: 'hesapla <işlem>'
};