import { parse } from 'node-html-parser';
import url from "url";
import { globby } from 'globby';
import path from "path";
import sharp from "sharp";
import { cp, writeFile, readFile, rm } from "fs/promises";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const BUILD_DIR = "build";
;(async () => {
    // remove build dir
    await rm(path.join(__dirname, "..", BUILD_DIR), {
        recursive: true,
        force: true
    })

    const sourceFiles = (await globby("**", {
        cwd: path.join(__dirname, ".."),
        gitignore: true,
        ignore: [path.basename(__dirname) + "/**"],
        markDirectories: true,
        objectMode: true
    })).map(entry => entry.path)
    await Promise.all(sourceFiles.map(async sourceFile => {
        await cp(path.join(__dirname, "..", sourceFile), path.join(__dirname, "..", BUILD_DIR, sourceFile))
    }))

    const _htmlFiles = await globby(`**/*.html`, {
        cwd: path.join(__dirname, ".."),
        gitignore: true,
        ignore: [path.basename(__dirname) + "/**"],
        objectMode: true
    })
    const htmlFiles = _htmlFiles.map(entry => entry.path)
    await Promise.all(htmlFiles.map(async filePath => {
        const _filePath = path.join(__dirname, "..", filePath)
        const _fileDir = path.dirname(_filePath)
        const _fileDirAfterRoot = _fileDir.replace(path.join(__dirname, ".."), "")
        const file = await readFile(_filePath)
        const root = parse(file.toString())
        await Promise.all(root.querySelectorAll("img").map(async img => {
            const imgSrc = img.getAttribute("src")
            if (!imgSrc || imgSrc.startsWith("https://") || imgSrc.startsWith("http://")) {
                // don't care about external images basically
                return
            }
            const imagePathAndName = imgSrc.split(/\.[^.]+$/, 1)[0];
            const pathToFile = path.join(_fileDir, imgSrc)
            const sizes = [350, 700, 1500, 2400]

            const resizedImageSources = []
            await Promise.all(sizes.map(async size => {
                const compressedSrc = `${imagePathAndName}--${size}.png`
                resizedImageSources.push([size, compressedSrc])
                const outPath = path.join(__dirname, "..", BUILD_DIR, _fileDirAfterRoot, compressedSrc)

                await sharp(pathToFile)
                    .resize(size)
                    .png()
                    .toFile(outPath)
                    .catch(err => {
                        console.debug(err.message)
                    })
                ;
            }))

            const compressedImageSources = []
            await Promise.all(sizes.map(async size => {
                const compressedSrc = `${imagePathAndName}--${size}.webp`
                compressedImageSources.push([size, compressedSrc])
                const outPath = path.join(__dirname, "..", BUILD_DIR, _fileDirAfterRoot, compressedSrc)

                await sharp(pathToFile)
                    .resize(size)
                    .webp()
                    .toFile(outPath)
                    .catch(err => {
                        console.debug(err.message)
                    })
                ;
            }))


            const sizesToUse = sizes.map(size => `(min-width: ${size}px) ${size}px`)

            const sourceElement = parse("<source>").querySelector("source")
            sourceElement.setAttribute("sizes", sizesToUse.join(", "))
            sourceElement.setAttribute("srcset", compressedImageSources.map(([size, src]) => `${src} ${size}w`).join(", "))
            sourceElement.setAttribute("type", "image/webp")

            img.setAttribute("sizes", sizesToUse.join(", "))
            img.setAttribute("srcset", resizedImageSources.map(([size, src]) => `${src} ${size}w`).join(", "))
            img.replaceWith(`<picture>${sourceElement.outerHTML}${img.outerHTML}</picture>`)
        }))

        console.debug("writing to: ", path.join(__dirname, "..", BUILD_DIR, filePath), "because", filePath)

        await writeFile(path.join(__dirname, "..", BUILD_DIR, filePath), root.toString())
    }))
})()
