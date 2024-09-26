import { getImgExif } from "@/lib/image";
import Gallary from "@/components/Gallary";
import { ImageData } from "@/types/index";

// 服务器端数据获取函数
async function fetchData(): Promise<{ allImages: ImageData[] }> {
  const allImages: ImageData[] = await getImgExif();
  return { allImages };
}

export default async function Home() {
  const { allImages } = await fetchData();
  return (
    <div>
      <Gallary images={allImages.sort(() => Math.random() - 0.5)} />
    </div>
  );
}
