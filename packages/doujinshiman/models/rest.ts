import { Galleryinfo } from "../structures/Galleryinfo.ts"
import { Info } from "../structures/Info.ts"
import { Images } from "../structures/Images.ts"
import { hitomiGalleryinfo, hitomiImages, hitomiIndex, hitomiInfo, hitomiIntegrated, hitomiList } from "../../../utils/endpoints.ts"
import { ListPayload } from "../type/hitomi.ts"
import { Integrated } from "../structures/Integrated.ts"
import { header } from "../../../config.ts"

export class Rest {
    constructor () {}

    private async getRespone(url: string): Promise<any | undefined> {
        const data = await fetch(url, { headers: { Authorization: header } })
        if (!data.ok) return undefined
        return data.json().then(d => d)
    }
    
    async getGalleryinfo(id: number): Promise<Galleryinfo | undefined>  {
        return await new Rest().getRespone(hitomiGalleryinfo(id)).then(d => { 
            if (d !== undefined) return new Galleryinfo(d)
            return undefined
        })
    }
    async getInfo(id: number): Promise<Info | undefined>  {
        return await new Rest().getRespone(hitomiInfo(id)).then(d => { 
            if (d !== undefined) return new Info(d)
            return undefined
        })
    }
    async getImages(id: number): Promise<Images | undefined>  {
        return await new Rest().getRespone(hitomiImages(id)).then(d => { 
            if (d !== undefined) return new Images(d)
            return undefined
        })
    }
    async getIndex(): Promise<[] | undefined>  {
        return await new Rest().getRespone(hitomiIndex).then(d => { 
            if (d !== undefined) return d
            return undefined
        })
    }
    async getList(list: number): Promise<ListPayload | undefined>  {
        return await new Rest().getRespone(hitomiList(list)).then(d => { 
            if (d !== undefined) return d
            return undefined
        })
    }
    async getIntegrated(num: number): Promise<Integrated | undefined>  {
        return await new Rest().getRespone(hitomiIntegrated(num)).then(d => { 
            if (d !== undefined) return new Integrated(d)
            return undefined
        })
    }
}