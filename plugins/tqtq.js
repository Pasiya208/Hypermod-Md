const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')

let fs = require('fs')

let moment = require('moment-timezone')

let handler = async (m) => {

    let who

    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender

    else who = m.sender

    let user = global.db.data.users[who]

let tqto = `

*BIG THANKS TO*

Nurutomo: 

Istikmal: 

Ilman: 

Amirul: 

Supun

`

     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({

     templateMessage: {

         hydratedTemplate: {

           hydratedContentText: tqto,

           locationMessage: { 

           jpegThumbnail: fs.readFileSync('./media/tqto.jpg') }, 

           hydratedFooterText: wm,

           hydratedButtons: [{

             urlButton: {

               displayText: '💠 SITE',

               url: 'www.hypermodz.ml'

             }

           },

           {

             quickReplyButton: {

               displayText: 'DONASI',

               id: '.donasi',

             }

           },

               {

             quickReplyButton: {

               displayText: 'MENU',

               id: '.menu',

             }

           }]

         }

       }

     }), { userJid: m.sender, quoted: m });

    //conn.reply(m.chat, text.trim(), m)

    return await conn.relayMessage(

         m.chat,

         template.message,

         { messageId: template.key.id }

     )

}

handler.help = ['tqto']

handler.tags = ['info']

handler.command = /^(credits|credit|thanks|thanksto|tqto)$/i

module.exports = handler
