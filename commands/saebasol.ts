import { Command, CommandContext, GuildTextChannel, Embed } from "../deps.ts"
import { Rest } from "../packages/doujinshiman/models/rest.ts"

export class SaebasolCommand extends Command {
    name = 'saebsol'
    aliases = ['sbl']
    async execute(ctx: CommandContext) {
        if (ctx.args[0] === undefined) return ctx.channel.send('Saebasol의 `private api`를 활용하였습니다.')
        switch (ctx.args[0]) {
            case "번호":
                const num = await new Rest().getInfo(Number(ctx.args[1]))
                const embed = new Embed()
                if (num === undefined){ 
                    ctx.channel.send('None')
                    break
                }
                embed.addField('galleryid', num.galleryid)
                if (num.characters === []) {
                    embed.addField('characters', 'None')
                } else {
                    num.characters.forEach(async (e) => {
                        embed.addField('characters', e.value)
                    })
                }
                if (num.title.value === undefined) {
                    embed.addField('title', 'None')
                } else {
                    embed.addField('title', num.title.value)
                }
                if (num.artist === []) {
                    embed.addField('artists', 'None')
                } else {
                    num.artist.forEach( async (e) => {
                        embed.addField('artists', e.value)
                    })
                }
                if (num.group === []) {
                    embed.addField('group', 'None')
                } else {
                    num.group.forEach( async (e) => {
                        embed.addField('group', e.value)
                    })
                }
               if (num.language.value === undefined) {
                    embed.addField('language', 'None')
                } else {
                    embed.addField('language', num.language.value)
                }
                if (num.series.length === 0) {
                    embed.addField('series', 'None')
                } else {
                    num.series.forEach( async (e) => {
                        embed.addField('series', e.value)
                    })
                }
                if (num.tags.length === 0) {
                    embed.addField('tags', 'None')
                } else {
                    let d: string[] = []
                    num.tags.forEach( async (e) => d.push(e.value))
                    embed.addField('tags', d.join(', '))
                }
                if (num.type.value === undefined) {
                    embed.addField('type', 'None')
                } else {
                    embed.addField('type', num.type.value)
                }
                await ctx.channel.send(embed)
            break
            case 'list':
                if ((ctx.channel as GuildTextChannel).nsfw) {
                    if (ctx.args[1] === '랜덤'){
                        const num = await new Rest().getIndex()
                        if (num !== undefined) {
                            const random = Math.floor(Math.random() * num.length) + 1
                            const images = await new Rest().getImages(Number(random))    
                            if (images?.images !== undefined) images?.images.forEach(e => { ctx.channel.send(e.url) })
                        }
                    } else {
                        const images = await new Rest().getImages(Number(ctx.args[1]))    
                        if (images?.images !== undefined) images?.images.forEach(e => { ctx.channel.send(e.url) })
                    }
                }
            break
            default: 
                ctx.channel.send('다시 입력하세요')
        }    
    }
}
