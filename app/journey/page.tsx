// "use client";
import { LOCATION_LIST } from "@/lib/const";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { useState } from "react";
import { getImgExif } from "@/lib/image";
import Gallary from "@/components/Gallary";
import { ImageData } from "@/types/index";

// 服务器端数据获取函数
async function fetchData() {
  const { allImages } = (await fetchData()) as { allImages: ImageData[] };
  return { allImages };
}
export default async function Home() {
  //   const [selectedLocation, setSelectedLocation] = useState<string>();
  const { allImages } = await fetchData();
  return (
    <div>
      <Gallary images={allImages.sort(() => Math.random() - 0.5)} />
    </div>
    // <div>
    //   <Listbox
    //     aria-label="Listbox Variants"
    //     color="danger"
    //     variant="flat"
    //     items={LOCATION_LIST}
    //     onAction={(key) => {
    //       setSelectedLocation(key);
    //     }}>
    //     {(item) => (
    //       <ListboxItem key={item.key} isSelected={true}>
    //         {item.label}
    //       </ListboxItem>
    //     )}
    //   </Listbox>
    // </div>
  );
}
