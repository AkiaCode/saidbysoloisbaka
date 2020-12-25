import { Image, ImagesPayload } from "../type/hitomi.ts"
import { Base } from "./Base.ts"

export class Images extends Base {
    images?: Image[];
    constructor(data: ImagesPayload) {
        super(data)
        this.images = data?.images
    }
}