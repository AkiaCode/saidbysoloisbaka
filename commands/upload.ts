import { Command, CommandContext, Destination, download } from "../deps.ts"

export class UploadCommand extends Command {
    name = 'upload'
    execute(ctx: CommandContext) {
        if (ctx.message.attachments[0] === undefined) {
            ctx.channel.send('명령어와 함께 사진을 보내주세요')
        } else {
            const destination: Destination = {
                file: ctx.message.attachments[0].filename,
                dir: './web/static/'
            }
            console.log(destination.file, ctx.message.attachments[0].url)
            
            download(ctx.message.attachments[0].url, destination)

            ctx.channel.send('https://cdn.ttakkku.com/static/' + ctx.message.attachments[0].filename)
        }
    }
}

