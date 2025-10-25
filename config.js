const fs = require('fs')

//Bot Setting
global.owner = ['50931983439'] //Own Number
global.urlfoto = 'https://files.catbox.moe/1ilypq.jpg' //Url Foto 
global.url = 'https://whatsapp.com/channel/0029VbBIwwK4tRrr0GWdPZ46' //Url Channel dev
global.developer = "Mr Storm" //Dev Name
global.botname = "Storm Bug Bot" //Bot Name
global.version = "1.0.0" //Version Bot
global.footer = "Goo" //footer section
global.status = true //"self/public" section of the bot
global.autoreactDB = '120363404759959596' //Global auto react Channel 

//Sticker Setiings
global.lol = "";
global.mess = {
owner: '*ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ɪs ᴜsᴇᴅ ᴏɴʟʏ ғᴏʀ ᴏᴡɴᴇʀ.*',
premium: '*ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ɪs ᴜsᴇᴅ ᴏɴʟʏ ғᴏʀ ᴘʀᴇᴍɪᴜᴍ.*',
succes: '*sᴜᴄᴄᴇssғᴜʟʟʏ.*',
group: '*ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ɪs ᴏɴʟʏ ᴜsᴇᴅ ɪɴ ɢʀᴏᴜᴘ.*',
admins: '*ᴛʜᴇ ʙᴏᴛ ᴍᴜsᴛ ʙᴇ ᴀᴅᴍɪɴ ᴏғ ᴛʜᴇ ɢʀᴏᴜᴘ.*'
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
