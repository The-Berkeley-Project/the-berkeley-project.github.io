const sharp = require('sharp')
const util = require('util')
const _glob = require('glob')
const glob = util.promisify(_glob)
const path = require('path')
const mkdir = require("fs/promises").mkdir

;(async () => {
    const imgPath = "img/**/*.{png,jpg}"
    const prefix = path.join(__dirname, "..")
    const _files = await glob(`${prefix}/${imgPath}`, {})

    await Promise.all(_files.map(async file => {
        const _dest = file.replace(prefix, "")
        const _split = _dest.split("/")
        _split[1] = `${_split[1]}-compressed`

        const _inter = `${prefix}${_split.join("/")}`
        const inter = _inter.substring(0, _inter.lastIndexOf("."))
        // final result without file extension

        const destFolder = path.dirname(_inter)
        await mkdir(destFolder, { recursive: true }).catch(() => {})

        const sizes = [330, 700, 1400]
        await Promise.all(sizes.map(size =>
            sharp(file)
                .resize(size)
                .png()
                .toFile(`${inter}-${size}.png`)
        ))
    }))
})()
