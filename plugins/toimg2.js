let { webp2png } = require('../lib/webp2mp4')

let handler = async (m, { conn, usedPrefix, command }) => {

  if (!m.quoted) throw `ශීර්ෂ පාඨය සමඟ පිළිතුරු ස්ටිකරය *${usedPrefix + command}*`

  let mime = m.quoted.mimetype || ''

  if (!/webp/.test(mime)) throw `ශීර්ෂ පාඨය සහිත පිළිතුරු ස්ටිකරය *${usedPrefix + command}*`

  let media = await m.quoted.download()

  let out = Buffer.alloc(0)

  if (/webp/.test(mime)) {

    out = await webp2png(media)

  }

  await conn.sendFile(m.chat, out, 'done.png', '*DONE*', m, false, {

    thumbnail: Buffer.alloc(0)

  })

}

handler.help = ['toimg (reply)']

handler.tags = ['sticker']

handler.command = ['toimg']

module.exports = handler
