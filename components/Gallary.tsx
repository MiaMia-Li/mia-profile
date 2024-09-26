"use client";

import { Card, CardFooter, Image, Button } from "@nextui-org/react";

// 定义接口类型
interface ImageData {
  src: string;
  exif: {
    ISO: number;
    aperture: number;
    shutterSpeed: string;
  };
}

export default function Gallery({ images }: { images: ImageData[] }) {
  return (
    <div className="gallery-container p-4">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((image) => {
          return (
            <Card
              isFooterBlurred
              radius="lg"
              className="border-none"
              key={image.src}>
              <Image
                alt="Woman listing to music"
                className="object-cover"
                //   height={200}
                src={image.src}
                //   width={}
              />
              <CardFooter className="text-small justify-between">
                <div>
                  {image.exif.focalLength}mm&nbsp; ISO{image.exif.ISO}&nbsp;F
                  {image.exif.aperture}&nbsp;
                  {image.exif.shutterSpeed}
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
