let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/nsfw/waifu')
  if (!res.ok) throw 'දෝෂ සහිත වෙබ් අඩවිය අක්‍රියයි'
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'විස්මයක් නියමයි >//<', m, 0, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['waifunsfw']
handler.tags = ['nsfw']
handler.command = /^(waifunsfw)$/i

handler.limit = true
handler.nsfw = true

module.exports = handler
