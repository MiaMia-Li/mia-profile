import { promises as fs } from "fs";
import path from "path";
import sharp from "sharp";

/**
 * @typedef {Object} CompressOptions
 * @property {number} [quality=85] - 压缩质量，默认为 85
 * @property {number} [maxWidth=1920] - 最大宽度，默认为 1920
 * @property {number} [maxHeight=1080] - 最大高度，默认为 1080
 */

/**
 * 压缩指定目录下的所有图片，并将其保存到新的文件夹中，保留 EXIF 信息
 * @param {string} sourceDir - 原始文件夹路径
 * @param {string} outputDir - 压缩后图片的目标文件夹路径
 * @param {CompressOptions} [options={}] - 压缩选项
 */
async function compressImages(sourceDir, outputDir, options = {}) {
  const { quality = 85, maxWidth = 1920, maxHeight = 1080 } = options;

  try {
    // 创建目标文件夹，如果不存在
    await fs.mkdir(outputDir, { recursive: true });

    const files = await fs.readdir(sourceDir); // 读取源文件夹内所有文件

    for (const file of files) {
      const filePath = path.join(sourceDir, file);
      const stat = await fs.stat(filePath); // 获取文件状态

      // 只处理图片文件
      if (stat.isFile() && /\.(jpg|jpeg|png|gif)$/i.test(file)) {
        try {
          const image = sharp(filePath); // 加载图片
          const metadata = await image.metadata(); // 获取图片元数据

          // 构造输出文件路径
          const outputFilePath = path.join(outputDir, file);

          // 如果图片大于指定尺寸则压缩
          if (
            metadata.width &&
            metadata.height &&
            (metadata.width > maxWidth || metadata.height > maxHeight)
          ) {
            await image
              .resize(maxWidth, maxHeight, {
                fit: "inside",
                withoutEnlargement: true,
              })
              .jpeg({ quality }) // 压缩质量
              .withMetadata() // 保留 EXIF 信息
              .toFile(outputFilePath); // 写入压缩文件到新文件夹
          } else {
            // 图片不需要尺寸调整，仅压缩质量并保留 EXIF 信息
            await image
              .jpeg({ quality })
              .withMetadata() // 保留 EXIF 信息
              .toFile(outputFilePath); // 写入压缩文件到新文件夹
          }

          console.log(`已压缩并保存到: ${outputFilePath}`);
        } catch (err) {
          console.error(`处理文件 ${file} 时出错:`, err);
        }
      }
    }
  } catch (err) {
    console.error("读取目录时出错:", err);
  }
}

// 示例调用
const journeyFolder = path.join(process.cwd(), "public/journey_large");
const compressedFolder = path.join(process.cwd(), "public/journey");
compressImages(journeyFolder, compressedFolder, {});
