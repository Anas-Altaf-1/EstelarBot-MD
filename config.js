//=============『 Utama 』================== //
global.owner = ['923336681780', '923046449370'] 
global.mods = [] 
global.prems = [] 

//=============『 Info Owner 』============== //
global.nameowner = 'KING-ZIT-MD'
global.numberowner = '923336681780'
global.instagram = 'https://www.instagram.com/'
global.github = 'https://github.com/'
global.dana = '+923336681780'
global.pulsa = '+923336681780'
global.gopay = '+923336681780'

//=============『 Info Bot 』=================//
global.namebot = 'KING-ZIT-𝑩𝒐𝒕-𝑴𝑫 '
global.gc = 'https://chat.whatsapp.com/Cwuyiz93gvILEi2iqv4T4M'
global.web = 'https://youtube.com/channel/UCbzkOcWJL1i4W4QRAoBu6Vw' //ubah jadi website lu, bisa link ig, link github, link yt, klo link gc ntr beda tampilan lagi. 
global.price1 = '10000 bulan = 0.000\n2 Minggu 0.000\n1 Minggu 0.000'

//=======『 Tampilan Dan Lainnya 』============//
global.fotonya1 = 'https://i.ibb.co/jGhVVRK/Text-Pro-me-162ae7ee1a309a.jpg' //ganti jadi foto bot mu
global.fotonya2 = 'https://i.ibb.co/jGhVVRK/Text-Pro-me-162ae7ee1a309a.jpg' //ini juga ganti 
global.lolkey = 'Papah-Chan' //biar mudah ngegantinya semisal apikeynya expired:v
global.zenzkey = 'BagasPrdn' //ganti jadi apikey lu kalau expired
global.wm = 'KING-ZIT-MD'
global.watermark = wm
global.wm2 = '                     「 KING-ZIT-MD 」'
global.wm3 = '⫹⫺ KING-ZIT-𝙼𝙳'
global.htki = '––––––『' 
global.htka = '』––––––'
global.media = 'https://i.ibb.co/jGhVVRK/Text-Pro-me-162ae7ee1a309a.jpg'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.wait = '_*Wait Processing...*_'
global.eror = '_*Server Error*_'
global.benar = 'True ✅\n'
global.salah = 'False ❌\n'
global.stiker_wait = 'Stiker creating'
global.packname = '2022'
global.author = '© King Zit'
global.vs = '1.1.5'

//=============『 Apikey 』================== //
global.APIs = { // API Prefix
  // name: 'https://website'
  amel: 'https://melcanz.com',
    bx: 'https://bx-hunter.herokuapp.com',
  dhnjing: 'https://dhnjing.xyz',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  zekais: 'http://zekais-api.herokuapp.com',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  erdwepe: 'https://erdwpe-api.herokuapp.com',
  lolhuman: 'https://api.lolhuman.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://melcanz.com': 'elaina',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.xteam.xyz': 'd37372311698ed1d',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.xyz': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://zekais-api.herokuapp.com': 'apikeymu',
  'https://api.lolhuman.xyz': 'Deffbotz',
}

//=============『 RPG GAMES 』================== //
global.multiplier = 69 // The higher, The harder levelup
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//===========『 Jangan Di Ubah 』================ //
let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
