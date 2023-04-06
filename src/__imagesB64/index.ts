import {  imageBase64 as cogWheel} from "./__cogWheel"

export type ImageKey = "cogWheel"

export const images: {[key in ImageKey]: {fileName: string, imageBase64: string}} = {
    cogWheel: { fileName: "cogWheel.png", imageBase64: cogWheel }
}