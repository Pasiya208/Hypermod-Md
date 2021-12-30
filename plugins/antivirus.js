let handler = m => m

handler.all = async function (m, { isBotAdmin }) {

    if (m.messageStubType === 68) { //Auto clear if there are messages that can't be seen by whatsapp web
        let log = {

            key: m.key,

            content: m.msg,

            sender: m.sender

        }

        await this.modifyChat(m.chat, 'clear', {

            includeStarred: false

        }).catch(console.log)

    }

}

module.exports = handler
