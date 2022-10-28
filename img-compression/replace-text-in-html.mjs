import sharp from "sharp";
import supportsColor from 'supports-color';
import util from "util";
import _glob from "glob";
import path from "path";
import { readFile, writeFile } from "fs/promises";
import ProgressBar from "progress";

const glob = util.promisify(_glob)
import * as url from 'url';
import os from "os";
import prompts from "prompts";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

if (path.sep !== '/') {
    console.warn("This script might not work with the Windows file system...")
}

;(async () => {
    const _filePath = "gallery.html"
    const filePath = path.join(__dirname, "..", _filePath)

    const file = await readFile(filePath)
    const str = file.toString()
    const lines = str.split("\n")
    const newLines = []
    await lines.reduce(async (prevPromise, line) => {
        await prevPromise

        const findTemplate = `<img src="img/gallery-pics/([^/.]+).(png|PNG|jpg|JPG)" class="img-responsive" style="width:350px;height:250px;">`
        const template =
            `      <img src="img/gallery-pics/[NAME].[OG_FORMAT]" sizes="350px" srcset="img-compressed/gallery-pics/[NAME]-350.png 350w, img-compressed/gallery-pics/[NAME]-700.png 700w"
              class="img-responsive" style="width:350px;height:250px;">`

        const match = line.match(findTemplate)
        if (!match) {
            newLines.push(line)
            return
        }

        const imgName = match[1]
        const format = match[2]
        const replacementLine = template
            .replaceAll("[NAME]", imgName)
            .replaceAll("[OG_FORMAT]", format)


        console.log(`Found line: ${os.EOL}${line}`)
        console.log(`Replacement: ${os.EOL}${replacementLine}`)

        const { value } = await prompts({
            type: 'confirm',
            name: 'value',
            message: 'Would you like to replace this line?',
            initial: true
        })
        if (value) {
            newLines.push(replacementLine)
        } else {
            newLines.push(line)
        }
    }, Promise.resolve())

    const newStr = newLines.join("\n")
    await writeFile(filePath, newStr)
})()
