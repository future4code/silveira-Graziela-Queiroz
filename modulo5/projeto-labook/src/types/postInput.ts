import { POST_ROLE } from "../model/Post"

export type postInput = {
    photo:string,
    description: string,
    // createDate: Date,
    type: POST_ROLE,
    token: string
}