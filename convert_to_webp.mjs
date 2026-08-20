import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dir = path.join(__dirname, 'public', 'images', 'gemini');

async function convert() {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.endsWith('.png')) {
      const inputPath = path.join(dir, file);
      const outputPath = path.join(dir, file.replace('.png', '.webp'));
      await sharp(inputPath).webp({ quality: 80 }).toFile(outputPath);
      console.log(`Converted ${file} to .webp`);
      fs.unlinkSync(inputPath); // Delete the original PNG
    }
  }
}

convert().catch(console.error);
