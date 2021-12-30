const { toAudio } = require('../lib/converter')

let handler = async (m, { conn, usedPrefix, command }) => {

  let q = m.quoted ? m.quoted : m

  let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''

  if (!/video|audio/.test(mime)) throw `ඔබට විධානය සමඟ mp3 බවට පරිවර්තනය කිරීමට අවශ්‍ය වීඩියෝ හෝ හඬ සටහනට පිළිතුරු දෙන්න *${usedPrefix + command}*`

  let media = await q.download()

  let audio = await toAudio(media, 'mp4')

  conn.sendMessage(m.chat, { audio: url: audio }, {quoted: m})

}

handler.help = ['tomp3']

handler.tags = ['audio']

handler.command = /^to(mp3|a(udio)?)$/i

module.exports = handler
