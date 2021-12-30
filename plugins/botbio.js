let handler = async (m, { conn, text }) => {

   if (!text) throw `නව Bio Bot සඳහා පෙළ ඇතුළත් කරන්න`

     try {

        await conn.setStatus(text)

        conn.reply(m.chat, 'Bio Bot වෙනස් කිරීම සාර්තකයි', m)

     } catch (e) {

       console.log(e)

       throw `Error`

     }

}

handler.help = ['setbotbio']

handler.tags = ['owner']

handler.command = /^(setbotbio)$/i

handler.owner = true

module.exports = handler
