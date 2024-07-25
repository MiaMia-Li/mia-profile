"use client";
import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { DISH_LIST } from "@/config";

const DishList: React.FC<> = () => {
  return (
    <div className="gap-4 grid grid-cols-2 sm:grid-cols-4">
      {DISH_LIST.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small flex-col">
            <b>{item.title}</b>
            <p className="text-default-500">{item.description}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
export default DishList;
