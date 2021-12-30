let handler = async (m, { conn, usedPrefix, text }) => {

  if (!text) throw `භාවිත උදාහරණය\n${usedPrefix}map jakarta`

  m.reply('ඉම්න~')

  json = await require('axios').get(`https://mnazria.herokuapp.com/api/maps?search=${text}`)

  conn.sendMessage(m.chat, { image: url: json.data.gambar }, { quoted: m, caption: `Map : `+text })

}

handler.help = ['map']

handler.tags = ['tools']

handler.command = /^map$/i

module.exports = handler
