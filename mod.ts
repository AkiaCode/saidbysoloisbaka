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

client.connect('NzkxOTE0NTU1MTk0MzQzNDY0.X-WF5w.dUg_w99X_iSSVJiF_Ceox-j48AM', Intents.None)
