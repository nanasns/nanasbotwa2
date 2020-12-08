const qrcode = require("qrcode-terminal");
const moment = require("moment");
const cheerio = require("cheerio");
const get = require('got')
const fs = require("fs");
const dl = require("./lib/downloadImage.js");
const fetch = require('node-fetch');
const urlencode = require("urlencode");
const axios = require("axios");
const imageToBase64 = require('image-to-base64');
const menu = require("./lib/menu.js");
const donate = require("./lib/donate.js");
const info = require("./lib/info.js");
				  
//
const BotName = 'Nanas'; // Nama Bot Whatsapp
const instagramlu = 'https://instagram.com/nasrullah_ns10' ; // Nama Instagramlu cok
const whatsapplu = '0882-5814-6470'; // Nomor whatsapplu cok
const kapanbotaktif = '24 Jam'; // Kapan bot lu aktif
//
const
{
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   waChatKey,
} = require("@adiwajshing/baileys");
var jam = moment().format("HH:mm");

function foreach(arr, func)
{
   for (var i in arr)
   {
      func(i, arr[i]);
   }
}
const conn = new WAConnection()
conn.on('qr', qr =>
{
   qrcode.generate(qr,
   {
      small: true
   });
   console.log(`[ ${moment().format("HH:mm:ss")} ] ridho Ready scan now!`);
});

conn.on('credentials-updated', () =>
{
   // save credentials whenever updated
   console.log(`credentials updated$`)
   const authInfo = conn.base64EncodedAuthInfo() // get all the auth info we need to restore this session
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t')) // save this info to a file
})
fs.existsSync('./session.json') && conn.loadAuthInfo('./session.json')
// uncomment the following line to proxy the connection; some random proxy I got off of: https://proxyscrape.com/free-proxy-list
//conn.connectOptions.agent = ProxyAgent ('http://1.0.180.120:8080')
conn.connect();

conn.on('user-presence-update', json => console.log(`[ ${moment().format("HH:mm:ss")} ] => bot by @ridho_setiawan02`))
conn.on('message-status-update', json =>
{
   const participant = json.participant ? ' (' + json.participant + ')' : '' // participant exists when the message is from a group
   console.log(`[ ${moment().format("HH:mm:ss")} ] => bot by @ridho_setiawan02`)
})

conn.on('message-new', async(m) =>
{
   const messageContent = m.message
   const text = m.message.conversation
   let id = m.key.remoteJid
   const messageType = Object.keys(messageContent)[0] // message will always contain one key signifying what kind of message
   let imageMessage = m.message.imageMessage;
   console.log(`[ ${moment().format("HH:mm:ss")} ] => Nomor: [ ${id.split("@s.whatsapp.net")[0]} ] => ${text}`);
   // Groups

if (text.includes(".buatgrup"))
   {
var nama = text.split(".buatgrup")[1].split("-nomor")[0];
var nom = text.split("-nomor")[1];
var numArray = nom.split(",");
for ( var i = 0; i < numArray.length; i++ ) {
    numArray[i] = numArray[i] +"@s.whatsapp.net";
}
var str = numArray.join("");
console.log(str)
const group = await conn.groupCreate (nama, str)
console.log ("created group with id: " + group.gid)
conn.sendMessage(group.gid, "hello everyone", MessageType.extendedText) // say hello to everyone on the group

}

// FF A187 ID
if(text.includes(".cek")){
var num = text.replace(/.cek/ , "")
var idn = num.replace("0","+62");

console.log(id);
const gg = idn+'@s.whatsapp.net'

const exists = await conn.isOnWhatsApp (gg)
console.log(exists);
conn.sendMessage(id ,`${gg} ${exists ? " exists " : " does not exist"} on WhatsApp`, MessageType.text)
}

//Chat A187 ID
else if (text == 'assalamualaikum'){
conn.sendMessage(id, 'Waalaikumsalam.' ,MessageType.text);
}
else if (text == 'salam'){
conn.sendMessage(id, 'Waalaikumsalam.' ,MessageType.text);
}
else if (text == 'asalamualaikum'){
conn.sendMessage(id, 'Waalaikumsalam.' ,MessageType.text);
}
else if (text == 'Assalamualaikum'){
conn.sendMessage(id, 'Waalaikumsalam.' ,MessageType.text);
}
else if (text == 'p'){
conn.sendMessage(id, 'Ya?' ,MessageType.text);
}
else if (text == 'P'){
conn.sendMessage(id, 'Ya?' ,MessageType.text);
}
else if (text == 'Halo'){
conn.sendMessage(id, 'Ya?' ,MessageType.text);
}
else if (text == 'Asu'){
conn.sendMessage(id, 'Lu Asw' ,MessageType.text);
}
else if (text == '.owner'){
conn.sendMessage(id, 'Owner Nanas wa.me/6288258146470' ,MessageType.text);
}
else if (text == 'Ngentod'){
conn.sendMessage(id, 'Pasti tata krama belum ditemukan disini.' ,MessageType.text);
}
else if (text == 'Sundala'){
conn.sendMessage(id, 'Pasti tata krama belum ditemukan disini.' ,MessageType.text);
}
else if (text == 'Telaso'){
conn.sendMessage(id, 'Pasti tata krama belum ditemukan disini.' ,MessageType.text);
}
else if (text == 'Setang'){
conn.sendMessage(id, 'Pasti tata krama belum ditemukan disini.' ,MessageType.text);
}
else if (text == 'Anjing'){
conn.sendMessage(id, 'Pasti tata krama belum ditemukan disini.' ,MessageType.text);
}
else if (text == 'Bacot'){
conn.sendMessage(id, 'lu bacot_-#' ,MessageType.text);
}
else if (text == 'Tst'){
conn.sendMessage(id, '.' ,MessageType.text);
}
else if (text == 'Hai'){
conn.sendMessage(id, 'Ya?' ,MessageType.text);
}
else if (text == 'Nas'){
conn.sendMessage(id, 'Ya?' ,MessageType.text);
}
else if (text == 'nas'){
conn.sendMessage(id, 'Ya?' ,MessageType.text);
}
else if (text == 'Nas.'){
conn.sendMessage(id, 'Ya?' ,MessageType.text);
}
else if (text == 'Nanas'){
conn.sendMessage(id, 'Ya?' ,MessageType.text);
}
else if (text == 'Gan'){
conn.sendMessage(id, 'Ya?' ,MessageType.text);
}
else if (text == 'Bro'){
conn.sendMessage(id, 'Ya?' ,MessageType.text);
}
else if (text == 'Min'){
conn.sendMessage(id, 'Ya?' ,MessageType.text);
}
else if (text == 'Sayang'){
conn.sendMessage(id, 'Cih.' ,MessageType.text);
}
else if (text == 'I love u'){
conn.sendMessage(id, 'Cih.' ,MessageType.text);
}
else if (text == 'Mas'){
conn.sendMessage(id, 'Ya?' ,MessageType.text);
}
else if (text == 'Bakso satu'){
conn.sendMessage(id, 'Ok tunggu sebentar' ,MessageType.text);
}
else if (text == 'Bre'){
conn.sendMessage(id, 'Ya?' ,MessageType.text);
}
else if (text == 'Cuy'){
conn.sendMessage(id, 'Ya?' ,MessageType.text);
}
else if (text == 'Euy'){
conn.sendMessage(id, 'Ya?' ,MessageType.text);
}
else if (text == 'makasi'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'Makasi'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'makasih'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'Makasih'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'thank'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'Thank'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'thanks'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'Thanks'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}

// Fitur

const axios = require('axios')
const { resolve, reject } = require('promise')

const resep = async (menu) => new Promise((resolve, reject) => {
    axios.get('https://masak-apa.tomorisakura.vercel.app/api/search/?q=' + menu)
    .then(async (res) => {
        const { results } = await res.data
        const random = Math.floor(Math.random() * 16)
        axios.get('https://masak-apa.tomorisakura.vercel.app/api/recipe/' + results[random].key)
        .then(async (result) => {
            const { results } = await result.data
            const bahannya = await `${results.ingredient}`
            const bahan = bahannya.replace(/,/g,'\n')
            const tutornya = await `${results.step}`
            const tutornih = tutornya.replace(/,/g,'\n')
            const tutor = tutornih.replace(/.,/g,'\n')
            const hasil = `*Judul:* ${results.title}\n*Penulis:* ${results.author.user}\n*Rilis:* ${results.author.datePublished}\n*Level:* ${results.dificulty}\n*Waktu:* ${results.times}\n*Porsi:* ${results.servings}\n\n*Bahan-bahan:*\n${bahan}\n\n*Step-by-step:*\n${tutor}`
            resolve(hasil)
        })
    })
    .catch((err) => {
        console.log(err)
        reject(err)
    })
})

module.exports = {
    resep
}
