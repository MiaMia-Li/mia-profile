"use client";

import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import { ImageData } from "@/types/index";

export default function Gallery({ images }: { images: ImageData[] }) {
  return (
    <div className="gallery-container">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        <Card isFooterBlurred radius="lg" className="border-none">
          <Image alt="/" className="object-cover" src="/images/eg1.png" />
        </Card>
        <Card isFooterBlurred radius="lg" className="border-none">
          <Image alt="/" className="object-cover" src="/images/eg2.png" />
        </Card>
        <Card isFooterBlurred radius="lg" className="border-none">
          <Image alt="/" className="object-cover" src="/images/eg3.png" />
        </Card>
        <Card isFooterBlurred radius="lg" className="border-none">
          <Image alt="/" className="object-cover" src="/images/eg4.png" />
        </Card>
        {images.map((image) => {
          return (
            <Card
              isFooterBlurred
              radius="lg"
              className="border-none"
              key={image.src}>
              <Image
                alt="/"
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
