export const BASEURL: string = "https://doujinshiman.ga/"

export const Version: string = "v3"

export const hitomi: string = BASEURL + Version + "/api/hitomi"
export const hitomiList = (list: number) => hitomi + "/list/"+ list
export const hitomiGalleryinfo = (info: number) => hitomi + "/galleryinfo/" +  info
export const hitomiImages = (num: number) => hitomi + "/images/" + num
export const hitomiIndex = hitomi + "/index"
export const hitomiInfo = (num: number) => hitomi + "/info/" + num
export const hitomiIntegrated = (num: number) => hitomi + "/integrated/" + num 
export const hitomiProxy = (path: string) => BASEURL + "proxy/" + path