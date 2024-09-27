import { promises as fs } from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

/**
 * @typedef {Object} CompressOptions
 * @property {number} [quality=85] - 压缩质量，默认为 85
 * @property {number} [maxWidth=1920] - 最大宽度，默认为 1920
 * @property {number} [maxHeight=1080] - 最大高度，默认为 1080
 */

/**
 * 压缩指定目录下的所有图片
 * @param {string} directory - 目标文件夹路径
 * @param {CompressOptions} [options={}] - 压缩选项
 */
async function compressImages(directory, options = {}) {
  const { quality = 85, maxWidth = 1920, maxHeight = 1080 } = options;

  try {
    const files = await fs.readdir(directory); // 读取目标文件夹内所有文件

    for (const file of files) {
      const filePath = path.join(directory, file);
      const stat = await fs.stat(filePath); // 获取文件状态

      if (stat.isFile() && /\.(jpg|jpeg|png|gif)$/i.test(file)) {
        try {
          const image = sharp(filePath); // 加载图片
          const metadata = await image.metadata(); // 获取图片元数据

          if (
            metadata.width &&
            metadata.height &&
            (metadata.width > maxWidth || metadata.height > maxHeight)
          ) {
            // 如果图片大于指定尺寸则压缩
            await image
              .resize(maxWidth, maxHeight, {
                fit: "inside",
                withoutEnlargement: true,
              })
              .jpeg({ quality: quality })
              .toFile(path.join(directory, `compressed_${file}`)); // 生成压缩文件
          } else {
            // 仅压缩质量
            await image
              .jpeg({ quality: quality })
              .toFile(path.join(directory, `compressed_${file}`));
          }

          console.log(`已压缩: ${file}`);
        } catch (err) {
          console.error(`处理文件 ${file} 时出错:`, err);
        }
      }
    }
  } catch (err) {
    console.error("读取目录时出错:", err);
  }
}

const journeyFolder = path.join(process.cwd(), "public/journey");
compressImages(journeyFolder, {});
