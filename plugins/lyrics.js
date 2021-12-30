let fetch = require('node-fetch')

let handler = async (m, { text, usedPrefix, command }) => {

  if (!text) throw `හ්ම්.. ඔයා මොනවද හොයන්නේ?\n\nඋදාහරණයක්:\n${usedPrefix + command} Raja Malige`

  let res = await fetch(global.API('bx', '/api/music/liriklagu', { query: text }, 'apikey'))

  if (!res.ok) throw await `${res.status} ${res.statusText}`

  let json = await res.json()

  if (!json.status) throw json

  m.reply(json.result)

}

handler.help = ['lirik'].map(v => v + ' <teks>')

handler.tags = ['internet']

handler.command = /^(lirik|lyrics?)$/i

module.exports = handler
