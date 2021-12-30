let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/megumin')
  if (!res.ok) throw 'දෝෂ සහිත වෙබ් අඩවිය අක්‍රියයි'
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'my wife', m, 0, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['megumin']
handler.tags = ['anime']
handler.command = /^(megumin)$/i

handler.limit = true

module.exports = handler
