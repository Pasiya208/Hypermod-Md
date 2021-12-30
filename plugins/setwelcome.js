let handler = async (m, { conn, text, isROwner, isOwner, usedPrefix, command }) => {
  if (text) {
    if (isROwner) global.conn.welcome = text
    else if (isOwner) conn.welcome = text
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('සාදරයෙන් පිළිගනිමු\n@user (Mention)\n@subject (Group Title)\n@desc (Group Description)')
  } else throw `හ්ම්.. කෝ පෙළ?\n\nඋදාහරණයක්:\n${usedPrefix + command} සාදරයෙන් පිළිගනිමු @user සමූහයට @subject\n\n@desc`
}
handler.help = ['setwelcome <teks>']
handler.tags = ['owner', 'group']

handler.command = /^setwelcome$/i
module.exports = handler
