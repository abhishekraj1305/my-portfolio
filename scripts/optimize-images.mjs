import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const sourceDir = path.join(root, "src", "websitephoto");
const thumbDir = path.join(sourceDir, "optimized", "thumbs");
const fullDir = path.join(sourceDir, "optimized", "full");
const supported = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif"]);

function webpName(file) {
  return `${path.basename(file, path.extname(file))}.webp`;
}

async function ensureDirs() {
  await fs.mkdir(thumbDir, { recursive: true });
  await fs.mkdir(fullDir, { recursive: true });
}

async function getSourceFiles() {
  const entries = await fs.readdir(sourceDir, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && supported.has(path.extname(entry.name).toLowerCase()))
    .map((entry) => entry.name);
}

async function optimize(file) {
  const input = path.join(sourceDir, file);
  const outputName = webpName(file);
  const thumbOut = path.join(thumbDir, outputName);
  const fullOut = path.join(fullDir, outputName);

  await sharp(input)
    .rotate()
    .resize({ width: 640, height: 480, fit: "cover", position: "attention" })
    .webp({ quality: 72, effort: 5 })
    .toFile(thumbOut);

  await sharp(input)
    .rotate()
    .resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 82, effort: 5 })
    .toFile(fullOut);

  const [sourceStat, thumbStat, fullStat] = await Promise.all([fs.stat(input), fs.stat(thumbOut), fs.stat(fullOut)]);
  return {
    file,
    sourceKb: Math.round(sourceStat.size / 1024),
    thumbKb: Math.round(thumbStat.size / 1024),
    fullKb: Math.round(fullStat.size / 1024),
  };
}

await ensureDirs();
const files = await getSourceFiles();
const results = [];

for (const file of files) {
  results.push(await optimize(file));
}

const sourceTotal = results.reduce((sum, item) => sum + item.sourceKb, 0);
const thumbTotal = results.reduce((sum, item) => sum + item.thumbKb, 0);
const fullTotal = results.reduce((sum, item) => sum + item.fullKb, 0);

console.table(results);
console.log(`Optimized ${results.length} images.`);
console.log(`Original: ${sourceTotal} KB | Thumbnails: ${thumbTotal} KB | Full WebP: ${fullTotal} KB`);
