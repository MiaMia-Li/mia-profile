import fs from "fs";
import path from "path";
//@ts-ignore

import Exif from "exif";
const ExifImage = Exif.ExifImage;
import { ImageData } from "@/types/index";

// 将快门速度转换为分数形式
function convertShutterSpeed(shutterSpeedValue: number): string {
  const denominator = Math.round(Math.pow(2, shutterSpeedValue));
  return `1/${denominator}`;
}

export async function getImgExif() {
  const imagesPath = path.join(process.cwd(), "public/journey");

  const imageFiles = fs
    .readdirSync(imagesPath)
    .filter((file) => /\.(jpg|jpeg|png|gif)$/.test(file));

  // console.log("--imagesPath", imagesPath, imageFiles);

  const images: ImageData[] = await Promise.all(
    imageFiles.map(
      (file) =>
        new Promise<ImageData>((resolve, reject) => {
          const imagePath = path.join(imagesPath, file);
          const imageBuffer = fs.readFileSync(imagePath);

          // 异步读取 EXIF 数据
          try {
            new ExifImage({ image: imageBuffer }, function (
              error: any,
              exifData: any
            ) {
              if (error) {
                // console.log("Error: " + error.message);
                resolve({
                  src: `/journey/${file}`,
                  exif: {
                    ISO: "",
                    aperture: "",
                    shutterSpeed: "",
                    focalLength: "",
                  },
                });
              } else {
                // 提取所需的 EXIF 数据
                const exif = {
                  ISO: exifData?.exif?.ISO,
                  focalLength: exifData?.exif?.FocalLength,
                  aperture:
                    exifData?.exif?.ApertureValue ?? exifData?.exif?.FNumber,
                  shutterSpeed: convertShutterSpeed(
                    exifData?.exif?.ShutterSpeedValue ?? 0
                  ),
                };
                resolve({
                  src: `/journey/${file}`,
                  exif,
                });
              }
            });
          } catch (error) {
            // console.log("Error: " + error.message);
            resolve({
              src: `/journey/${file}`,
              exif: {
                ISO: "",
                aperture: "",
                shutterSpeed: "",
                focalLength: "",
              },
            });
          }
        })
    )
  );

  return images;
}
