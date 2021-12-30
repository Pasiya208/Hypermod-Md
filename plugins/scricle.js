const uploadImage = require('../lib/uploadImage') 

const { sticker } = require('../lib/sticker')

let handler = async (m, { conn, text }) => {

 try {

//  let [teks, teks2] = text.split('|')

  let q = m.quoted ? m.quoted : m

  let mime = (q.msg || q).mimetype || ''

  if (!mime) throw 'පින්තූරයක් නැත'

  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} Not Support`

  let img = await q.download()

  let url = await uploadImage(img)

  let wasted = `https://lolhuman.herokuapp.com/api/editor/roundimage?apikey=oniichan&img=${url}`

  let stiker = await sticker(null, wasted, packname, author)

 conn.sendFile(m.chat, stiker, '','',m)

 } catch (e) {

   m.reply('පිළිතුරු රූපය මෙන්සන් කරන්න, එය ක්‍රියා නොකරන්නේ නම්, එය දෝෂයකි !!')

  }

}

handler.help = ['circle']

handler.tags = ['sticker']

handler.command = /^circle$/i

handler.owner = false

handler.mods = false

handler.premium = false

handler.group = false

handler.private = false

handler.admin = false

handler.botAdmin = false

handler.fail = null

module.exports = handler
