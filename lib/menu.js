const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas perintah anda kepada bot ini.
- Source code / bot anda bisa lihat di https://github.com/iincen

Instagram: https://instagram.com/iincen_

c3n.`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname) => {
    return `
Hello, ${pushname}! 👋️
*_- - - - - [ BOT CEN ✨ ] - - - - -_*
Note:Call? Block :)

*_- - - - - [ MENU BOT CEN ] - - - - -_*

Creator:
. *${prefix}sticker*
. *${prefix}stickergif*
. *${prefix}stickergiphy*
. *${prefix}meme*
. *${prefix}quotemaker*
. *${prefix}nulis*

Religi:
. *${prefix}infosurah*
. *${prefix}surah*
. *${prefix}tafsir*
. *${prefix}ALaudio*
. *${prefix}jsolat*

Download:
. *${prefix}instagram*
. *${prefix}ytmp3*
. *${prefix}ytmp4*

Primbon:
. *${prefix}artinama*
. *${prefix}cekjodoh*

Search Any:
. *${prefix}images*
. *${prefix}sreddit*
. *${prefix}resep*
. *${prefix}stalkig*
. *${prefix}wiki*
. *${prefix}cuaca*
. *${prefix}chord*
. *${prefix}lirik*
. *${prefix}ss*
. *${prefix}play*
. *${prefix}whatanime*

Random Teks:
. *${prefix}fakta*
. *${prefix}pantun*
. *${prefix}katabijak*
. *${prefix}quote*

Random Images:
. *${prefix}anime*
. *${prefix}kpop*
. *${prefix}memes*

Lain-lain:
. *${prefix}tts*
. *${prefix}translate*
. *${prefix}resi*
. *${prefix}covidindo*
. *${prefix}ceklokasi*
. *${prefix}shortlink*
. *${prefix}bapakfont*

Fun Menu:
. *${prefix}simisimi*

Tentang Bot:
. *${prefix}donasi*
. *${prefix}botstat*
. *${prefix}ownerbot*
. *${prefix}join*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

Owner Bot:
. *${prefix}ban* - banned
. *${prefix}bc* - promosi
. *${prefix}leaveall* - keluar semua grup
. *${prefix}clearall* - hapus semua chat

_-_-_-_-_-_-_-_-_-_-_-_-_-_

Hope you have a great day!✨`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textAdmin = () => {
    return `
⚠ [ *Owner Group Only* ] ⚠
Berikut adalah fitur owner grup yang ada pada bot ini!
. *${prefix}kickall*
-owner adalah pembuat grup.

⚠ [ *Admin Group Only* ] ⚠ 
Berikut adalah fitur admin grup yang ada pada bot ini!

. *${prefix}add*
. *${prefix}kick* @tag
. *${prefix}promote* @tag
. *${prefix}demote* @tag
. *${prefix}tagall*
. *${prefix}del*
`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textDonasi = () => {
    return `
Hello, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi dengan cara:

GoPay : 085156760338

Doakan agar project bot ini bisa terus berkembang
Doakan agar author bot ini dapat ide-ide yang kreatif lagi

Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.

semoga harimu menyenangkan :)

Terimakasih.` 
}
