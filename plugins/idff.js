let fetch = require('node-fetch')

let handler = async (m, { args, usedPrefix, command }) => {

  if (!args[0]) throw `FF ID එක ඇතුලත් කරන්න`

  let res = await fetch(global.API('xteam', '/search/freefire', { id: args[0] }, 'APIKEY'))

  if (!res.ok) throw eror

  let json = await res.json()

  if (!json.status) throw json

  m.reply(json.result.name)

}

handler.help = ['epep'].map(v => v + ' <id>')

handler.tags = ['internet']

handler.command = /^(freefire|epep)$/i

module.exports = handler
