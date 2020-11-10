exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `☣ -----[ *MENU ${BotName}* ]----- ☣
  
Selamat Datang Tuan G-SOA *${id.split("@s.whatsapp.net")[0]}* 🐺
Berikut adalah beberapa fitur yang bisa tuan gunakan❗

🗓 *${tampilTanggal}*
⏰ *${tampilWaktu}*

🛡 Command / Perintah :
   
=> *⚡.PEMBUAT STICKER*
_${BotName} akan mengirimkan stickermu dengan caption #sticker!_
Perintah: #sticker
Contoh: kirim gambar dengan caption #sticker

=> *⚡.NULIS OTOMATIS*
_${BotName} akan mengirimkan tulisan di buku sesuai yang kamu kirim!_
Perintah: #nulis [kata]
Contoh: #nulis reuz uwu :v

=> *⚡.FITUR PANTUN*
_${BotName} akan mengirimkan pantun secara random!_
Perintah: #pantun
Contoh: #pantun

=> *⚡.DOWNLOADER YOUTUBE*
_${BotName} akan mengirimkan video downloader dari yt sesuai perintah kamu!_
Perintah: #yt [link]
Contoh: #yt https://youtube.com/c/REUZ_ID

=> *⚡.FITUR QUOTES*
_${BotName} akan mengirimkan katabijak secara random!_
Perintah: #quotes
Contoh: #quotes

=> *⚡.PENYEGAR TIMELINE*
_${BotName} akan mengirimkan gambar cogan/cecan sesuai yang kamu kirim!_
Perintah: #ptl [cewek/cowok]
Contoh: #ptl cewek

=> *⚡.FITUR ANIME*
_${BotName} akan mengirimkan gambar anime secara random!_
Perintah: #randomanime
Contoh: #randomanime

=> *⚡.PENGUBAH SUARA GOOGLE*
_${BotName} akan mengirimkan suara vn dari google sesuai perintah yang kamu kirim!_
Perintah: #ttsid [kata]
Contoh: #ttsid reuz

=> *⚡.FITUR QURAN*
_${BotName} akan mengirimkan ayat-ayat quran secara random!_
Perintah: #quran
Contoh: #quran

=> *⚡.INFORMASI BOT*
_${BotName} akan mengirimkan informasi tentang bot!_
Perintah: #info
Contoh: #info

=> *⚡.FITUR SAY*
_${BotName} akan mengirimkan kata kata sesuai yang kamu kirim!_
Perintah: #say [kata]
Contoh: #say halo reuz

=> *⚡.YOUTUBE MP3 DOWNLOADER*
_${BotName} akan mengirimkan lagu sesuai perintah yang kamu kirim!_
Perintah: #ytmp3 [link]
Contoh: #ytmp3 https://youtu.be/xxxx

=> *⚡.INSTAGRAM VIDEO/FOTO DOWNLOADER*
_${BotName} akan mengirimkan video/foto ig sesuai perintah yang kamu kirim!_
Perintah: #ig [link]
Contoh: #ig https://instagram.com/reuz.id

=> *⚡.FACEBOOK VIDEO/FOTO DOWNLOADER*
_${BotName} akan mengirimkan video/foto fb sesuai perintah yang kamu kirim!_
Perintah: #fb [link]
Contoh: #fb https://facebook.com/ReuzYt

=> *⚡.TWITTER VIDEO/FOTO DOWNLOADER*
_${BotName} akan mengirimkan video/foto twitter sesuai perintah yang kamu kirim!_
Perintah: #twt [link]
Contoh: #twt https://twitter.com/xxxx

=> *⚡.WIKIPEDIA*
_${BotName} akan mengirimkan hasil dari wikipedia sesuai perintah yang kamu kirim!_
Perintah: #wiki [query]
Contoh: #wiki Bot


💰JANGAN  LUPA DONASI AGAR BOT AKTIF TUAN!
💰MAU DONASI? SILAHKAN KETIK #donate

📺 *Iklan* : *Youtube REUZ*

✅ Follow akun instagram admin ${instagramlu}

📣 INFORMASI COVID-19 TERBARU!

🔊 POSITIF: *${corohelp.confirmed.value}*
🔊 SEMBUH: *${corohelp.recovered.value}*
🔊 MENINGGAL: *${corohelp.deaths.value}*
🔊 UPDATE: *${corohelp.lastUpdate}*

🔔 _TETAP JAGA KESEHATAN DAN JANGAN LUPA PAKAI MASKER!_

🖥 Mau pasang iklan di *${BotName} ?*
☎️ WA : *${whatsapplu}*
  
⚠️ Gunakan dengan bijak ‼️
⚠️ Bot ini berjalan ${kapanbotaktif} ‼️

💬 Official Grub [1] : ${grupch1}

💬 Official Grub [2] : ${grupch2}

  
☣ -----[ *POWERED BY ${BotName}* ]----- ☣`
}
