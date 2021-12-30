const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'මාධ්‍ය හමු නොවීය'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  m.reply(`© HYPER MOD\n\n${link}
${media.length} Byte(s)
${isTele ? '(කල් ඉකුත් වීමේ දිනයක් නොමැත)' : '(දන්නේ නෑ)'}`)
}
handler.help = ['tourl <reply image/audio/Any Documents>']
handler.tags = ['sticker']
handler.command = /^(upload|tourl)$/i

module.exports = handler
