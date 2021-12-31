let handler = m => m

handler.before = async function (m, { conn, isAdmin, isBotAdmin }) {
if (m.key.fromMe) return 
if (m.isBaileys) return 
  if (m.mentionedJid.includes(conn.user.jid)) {
conn.sendFile(m.chat, './src/tag.webp', 'hyper mod', '', m)
conn.sendFile(m.chat, './src/nana.mp3', 'nana.mp3', '',m)
   } else if (m.text.toLowerCase() == 'good morning') {
    m.reply('*ගුඩ් මොර්නින් බොක්ක*') 
   } else if (m.text.toLowerCase().includes('good night')) {
     m.reply('*ගුඩ් නයිට් බොක්ක*')
   } else if (m.text.toLowerCase() == 'ගුඩ් මොර්නින්') {
    m.reply('*ගුඩ් මොර්නින් බොක්ක*') 
   } else if (m.text.toLowerCase().includes('ගුඩ් නයිට්')) {
     m.reply('*ගුඩ් නයිට් බොක්ක*')
   } else if (m.text.toLowerCase() == 'ගුඩ් මොනින්') {
    m.reply('*ගුඩ් මොර්නින් බොක්ක*') 
   } else if (m.text.toLowerCase().includes('ගුඩ් නායිට්')) {
     m.reply('*ගුඩ් නයිට් බොක්ක*')
   }
  return true
}

module.exports = handler
