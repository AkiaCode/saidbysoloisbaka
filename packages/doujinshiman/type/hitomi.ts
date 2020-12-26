export interface IntegratedPayload {
    data: DataPayload
}
export interface DataPayload extends StatusPayload {
    galleryinfo: GalleryinfoPayload
    tags: TagPayload
}

export interface TagPayload {
    title: string
    artist: ValuePayload[]
    group: ValuePayload[]
    type: ValuePayload
    language: ValuePayload
    series: ValuePayload[]
    characters?: ValuePayload[]
    tags: ValuePayload[]
}

export interface ListPayload {
    list: InfoPayload[]
}

export interface InfoPayload extends StatusPayload {
    title: ValuePayload
    galleryid: string
    thumbnail: string
    artist: ValuePayload[]
    group: ValuePayload[]
    type: ValuePayload
    language: ValuePayload
    series: ValuePayload[]
    characters: ValuePayload[]
    tags: ValuePayload[]
}
export interface StatusPayload  {
    status: number
}


export interface GalleryinfoPayload extends StatusPayload {
    language_localname: string
    language: string
    date: string
    files: FilePayload[]
    tags: ValuePayload[]
    japanese_title?: string
    title: string
    id: string
    type: string
}

export interface ImagesPayload {
    images?: Image[]
}

export interface Image {
    url: string
}


export interface ValuePayload {
    value: string
    url: string
}

export interface FilePayload {
    hasvif: number
    haswebp: number
    hash: string
    name: string
    height: number
    width: number
}