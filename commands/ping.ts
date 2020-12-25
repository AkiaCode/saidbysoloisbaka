import { Command, CommandContext } from "../deps.ts"

export class PingCommand extends Command {
    name = 'ping'
    execute(ctx: CommandContext) {
        ctx.message.reply('https://github.com/harmony-org/harmony')
    }
}
