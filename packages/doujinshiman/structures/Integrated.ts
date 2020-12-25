import { DataPayload, IntegratedPayload } from "../type/hitomi.ts"
import { Base } from "./Base.ts"

export class Integrated extends Base {
    data: DataPayload;
    constructor(data: IntegratedPayload) {
        super(data)
        this.data = data.data
    }
}