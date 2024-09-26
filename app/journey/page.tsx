import { getImgExif } from "@/lib/image";
import Gallary from "@/components/Gallary";
import Marquee from "@/components/Marquee";
import { ImageData } from "@/types/index";
import { Link } from "@nextui-org/react";

// 服务器端数据获取函数
async function fetchData(): Promise<{ allImages: ImageData[] }> {
  const allImages: ImageData[] = await getImgExif();
  return { allImages };
}

export default async function Home() {
  const { allImages } = await fetchData();
  return (
    <div>
      {/* <div>
        Edit, enhance, and perfect your images effortlessly. ✨
        <Link href="https://www.aphototailor.com/" className="text-danger">
          Try PhotoTailor today!
        </Link>
      </div> */}
      <Gallary images={allImages.sort(() => Math.random() - 0.5)} />
    </div>
  );
}
