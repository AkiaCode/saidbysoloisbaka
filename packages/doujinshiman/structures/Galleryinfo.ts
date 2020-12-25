import { Base } from "../structures/Base.ts"
import { FilePayload, GalleryinfoPayload, ValuePayload } from "../type/hitomi.ts"

export class Galleryinfo extends Base {
    status: number
    language_localname: string
    id: string
    language: string;
    data: string;
    files: FilePayload[];
    tags: ValuePayload[];
    japanese_title?: string;
    title: string;
    type: string;
    constructor(data: GalleryinfoPayload) {
        super(data)
        this.status = data.status
        this.language_localname = data.language_localname
        this.language = data.language
        this.data = data.data
        this.files = data.files
        this.tags = data.tags
        this.japanese_title = data?.japanese_title
        this.title = data.title
        this.id = data.id
        this.type = data.type
    }
}