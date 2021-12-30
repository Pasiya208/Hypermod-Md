let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/waifu')
  if (!res.ok) throw 'දෝෂ සහිත වෙබ් අඩවිය අක්‍රියයි'
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'මගේ බිරිඳ', m, 0, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['waifu']
handler.tags = ['anime']
handler.command = /^(waifu)$/i

handler.limit = true

module.exports = handler
