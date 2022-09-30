import sharp from "sharp";
import supportsColor from 'supports-color';
import util from "util";
import _glob from "glob";
import path from "path";
import { mkdir, rm } from "fs/promises";
import ProgressBar from "progress";
const glob = util.promisify(_glob)
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));


if (path.sep !== '/') {
    console.warn("This script might not work with the Windows file system...")
}

;(async () => {
    const imgPath = "img/**/*.{png,jpg}"

    // remove existing compressed images
    const _compressedPath = `${path.join(__dirname, "..", imgPath.split("/")[0])}-compressed`
    await rm(_compressedPath, { recursive: true, force: true })

    const prefix = path.join(__dirname, "..").split(path.sep).join("/")
    const _files = await glob(`${prefix}/${imgPath}`, {})

    const allowColor = supportsColor.stdout.level > 1

    const bar = new ProgressBar('  transforming [:bar] :percent :etas', {
        total: _files.length,
        complete: allowColor ? '\u001b[44m \u001b[0m': '=',
        incomplete: allowColor ? '\u001b[40m \u001b[0m': '-'
    });

    await Promise.all(_files.map(async file => {
        const _dest = file.replace(prefix, "")
        const _split = _dest.split(path.sep)
        _split[1] = `${_split[1]}-compressed`

        const _inter = `${prefix}${_split.join(path.sep)}`
        const inter = _inter.substring(0, _inter.lastIndexOf("."))
        // final result without file extension

        const destFolder = path.dirname(_inter)
        await mkdir(destFolder, { recursive: true }).catch(() => {
        })

        const sizes = [330, 700, 1400]
        await Promise.all(sizes.map(size =>
            sharp(file)
                .resize(size)
                .png()
                .toFile(`${inter}-${size}.png`)
        ))

        bar.tick()
    }))

    bar.update(1)
    bar.terminate()
})()
