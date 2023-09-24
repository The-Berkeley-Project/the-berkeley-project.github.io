import { glob } from "glob";
import sizeOf from "image-size";
import fs from "fs/promises";
import path from "path";

const galleryPics = await glob('img/gallery-pics/**/*.{png,PNG,jpeg,JPEG,jpg,JPG}')

const toBeRenamed = galleryPics.filter(fileName => !/-\d{2,}x\d{2,}\./.test(fileName))
const results = await Promise.all(toBeRenamed.map(async imgName => {
    const dimensions = sizeOf(imgName)
    const parsedOrig = path.parse(imgName)
    const newName = path.join(parsedOrig.dir, `${parsedOrig.name}-${dimensions.width}x${dimensions.height}${parsedOrig.ext}`)
    await fs.rename(imgName, newName)
    return newName
}));

console.debug(results)
