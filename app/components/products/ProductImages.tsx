"use client";

import {
  CartProductType,
  SelectedImg,
} from "@/app/product/[productId]/ProductDetail";
import Image from "next/image";
import React from "react";

interface ProductImageProps {
  cartProduct: CartProductType;
  product: any;
  handleColorSelect: (value: SelectedImg) => void;
}

const ProductImages: React.FC<ProductImageProps> = ({
  cartProduct,
  product,
  handleColorSelect,
}) => {
  return (
    <div className="grid grid-cols-6 gap-2 h-full max-h-[500px] min-h-[300px] sm:min-h[400px]">
      <div className="flex flex-col items-center justify-center gap-4 cursor-pointer border h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
        {product.images.map((image: SelectedImg) => {
          return (
            <div key={image.color} onClick={()=>handleColorSelect(image)} className={`relative w-[80%] aspect-square rounded border-teal-300 ${cartProduct.selectedImg.color === image.color? "border-[1.5px]" : "border-none"}`} >
              <Image
                src={image.image}
                alt={image.color}
                fill
                className="object-contain"
              ></Image>
            </div>
          );
        })}
      </div>
      <div className="col-span-5 relative aspect-square">
        <Image fill src={cartProduct.selectedImg.image} alt={cartProduct.name} className="w-full h-full object-contain max-h-[500px] min-h-[300px] sm:min-h-[400px]"></Image>
      </div>
    </div>
  );
};

export default ProductImages;