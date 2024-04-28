global.owner = ['6283896757956']  
global.mods = ['6283896757956'] 
global.prems = ['6283896757956']
global.nameowner = 'VynaaValerie'
global.numberowner = '6283896757956' 
global.mail = 'vynaavalerie@gmail.com' 
global.gc = 'https://whatsapp.com/channel/0029VaHPYh6LNSa81M9Xcq1K'
global.instagram = 'https://instagram.com/vynaa_valerie'
global.wm = '© Yumi MD'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = '⫹⫺ Ytb Vynaa Valerie'
global.author = 'Yumi MD'
global.autobio = false // Set true untuk mengaktifkan autobio
global.maxwarn = '2' // Peringatan maksimum
// INJ THUMBNAIL
global.fotomu = 'https://telegra.ph/file/0f2fe3afc5286654189ac.jpg'
// HIASAN 
global.fsizedoc = '99999999999999'
global.fpagedoc = '999'
//INI WAJIB DI ISI!//
global.btc = '_' 
//Daftar terlebih dahulu https://api.botcahx.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.lann = '_'
//Daftar https://api.betabotz.eu.org 

global.APIs = {   
  btc: 'https://api.botcahx.eu.org'
}
global.APIKeys = { 
  'https://api.botcahx.eu.org': 'APIKEY' 
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
