"use client";

import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { truncateText } from "@/utils/truncateText";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  data: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();
  return (
    <Card shadow="sm" isPressable disableRipple={true} onPress={() => router.push(`/product/${data.id}`)}>
      <CardBody className="overflow-visible p-0">
        <Image
          radius="lg"
          width="100%"
          alt={data.name}
          className="w-full object-cover h-[200px]"
          src={data.images[0].image}
        />
      </CardBody>
      <CardFooter className="text-small justify-between">
        <b>{truncateText(data.name)}</b>
        <p className="text-default-500">S/{data.price}</p>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
