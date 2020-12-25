import { Rest } from "../models/rest.ts"


const test = await new Rest().getGalleryinfo(1808376)
console.log(test?.files)
const test1 = await new Rest().getInfo(1808376)
console.log(test1?.picture)
const test2 = await new Rest().getImages(1808376)
console.log(test2?.images)
const test4 = await new Rest().getIndex()
console.log(test4)
const test5 = await new Rest().getList(1)
console.log(test5)
const test6 = await new Rest().getIntegrated(1808376)
console.log(test6)
