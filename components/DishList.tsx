"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Chip,
  Skeleton,
} from "@nextui-org/react";

const DishList: React.FC = () => {
  const [data, setData] = useState<any[]>();
  async function fetchDishes() {
    const response = await fetch("/api/getDish", {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch dishes");
    }
    setData(await response.json());
  }
  useEffect(() => {
    fetchDishes();
  }, []);
  return (
    <div className="gap-4 grid grid-cols-2 sm:grid-cols-4">
      {!data && (
        <>
          <Card className="w-[200px] space-y-5 p-4" radius="lg">
            <Skeleton className="rounded-lg">
              <div className="h-24 rounded-lg bg-default-300"></div>
            </Skeleton>
            <div className="space-y-3">
              <Skeleton className="w-3/5 rounded-lg">
                <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-4/5 rounded-lg">
                <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-2/5 rounded-lg">
                <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
              </Skeleton>
            </div>
          </Card>
        </>
      )}

      {data &&
        data.map((item, index) => {
          const { name, category, description, image_url, tags } = item;
          return (
            <Card shadow="sm" key={index} isPressable>
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={name}
                  className="w-full object-cover h-[160px]"
                  src={image_url}
                />
              </CardBody>
              <CardFooter className="text-small flex-col ">
                <b>{name}</b>
                {/* <p className="text-default-500">{item.description}</p> */}
                <p>
                  {tags.split(",").map((tag: any) => (
                    <Chip key={tag} color="warning" variant="flat">
                      {tag}
                    </Chip>
                  ))}
                </p>
              </CardFooter>
            </Card>
          );
        })}
    </div>
  );
};
export default DishList;
