let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/nsfw/neko')
  if (!res.ok) throw 'දෝෂ සහිත වෙබ් අඩවිය අක්‍රියයි'
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'බළලා කොතරම් විශිෂ්ටද?', m, 0, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['nekonsfw']
handler.tags = ['nsfw']
handler.command = /^(nekonsfw)$/i

handler.limit = true
handler.nsfw = true

module.exports = handler
