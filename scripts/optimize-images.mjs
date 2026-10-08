// Resizes and recompresses images in public/ in place so the static export ships web-sized files.
// Run with: node scripts/optimize-images.mjs
// Files are only overwritten when the result is smaller.
import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve("public");
const PORTRAIT_DIR = path.join(ROOT, "core");
const MIN_BYTES = 150 * 1024;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

function maxEdgeFor(file) {
  if (file.startsWith(PORTRAIT_DIR) && !/core-fa26|Core\.png|exec\.png/i.test(file)) return 900;
  return 1800;
}

let before = 0;
let after = 0;

for await (const file of walk(ROOT)) {
  const ext = path.extname(file).toLowerCase();
  if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;
  const { size } = await stat(file);
  if (size < MIN_BYTES) continue;

  const input = await readFile(file);
  const edge = maxEdgeFor(file);
  let pipeline = sharp(input).rotate().resize({
    width: edge,
    height: edge,
    fit: "inside",
    withoutEnlargement: true,
  });

  pipeline =
    ext === ".png"
      ? pipeline.png({ palette: true, quality: 85, effort: 8, compressionLevel: 9 })
      : pipeline.jpeg({ quality: 78, mozjpeg: true, progressive: true });

  const output = await pipeline.toBuffer();
  before += size;
  if (output.length < size) {
    await writeFile(file, output);
    after += output.length;
    console.log(`${path.relative(ROOT, file)}  ${(size / 1024).toFixed(0)}K -> ${(output.length / 1024).toFixed(0)}K`);
  } else {
    after += size;
  }
}

console.log(`\nTotal: ${(before / 1048576).toFixed(1)} MB -> ${(after / 1048576).toFixed(1)} MB`);
