import { Token } from "./config.ts"
import { CommandClient, Intents } from './deps.ts'
import { commands } from './utils/commandslist.ts'

const client = new CommandClient({
    prefix: '!'
})

client.on('ready', () => {
    console.log('Ready!')
})

commands.forEach((Command) => {
    const cmd = new Command()
    client.commands.add(cmd)
})

client.connect(Token, Intents.None)
