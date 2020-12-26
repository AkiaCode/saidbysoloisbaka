import { Rest } from "../models/rest.ts"


const SaidbySolo_hates_this_numbers = [1809408, 1496588, 1808376]

const test = await new Rest().getGalleryinfo(SaidbySolo_hates_this_numbers[1])
console.log(test?.japanese_title)
/*
const test1 = await new Rest().getInfo(SaidbySolo_hates_this_numbers[0])
console.log(test1)
const test2 = await new Rest().getImages(SaidbySolo_hates_this_numbers[0])
console.log(test2?.images)
const test4 = await new Rest().getIndex()
console.log(test4)
const test5 = await new Rest().getList(1)
console.log(test5)
const test6 = await new Rest().getIntegrated(SaidbySolo_hates_this_numbers[0])
console.log(test6) */