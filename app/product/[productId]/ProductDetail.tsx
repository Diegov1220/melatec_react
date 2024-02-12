"use client";

import { Button } from "@nextui-org/react";
import SetColor from "@/app/components/products/SetColor";
import SetQuantity from "@/app/components/products/SetQuantity";
import React, { useCallback, useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import ProductImages from "@/app/components/products/ProductImages";
import { useCart } from "@/hooks/useCart";
import { MdCheckCircle } from "react-icons/md";
import { useRouter } from "next/navigation";
import { RiShoppingBag3Line } from "react-icons/ri";

interface ProductDetailProps {
  product: any;
}

export type CartProductType = {
  id: string;
  name: string;
  description: string;
  brand: string;
  selectedImg: SelectedImg;
  quantity: number;
  price: number;
};

export type SelectedImg = {
  color: string;
  colorCode: string;
  image: string;
};

const Horizontal = () => {
  return <hr className="w-[30%] my-2"></hr>;
};

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const { handleAddProductToCart, cartProducts } = useCart();
  const [isProductInCart, setIsProductInCart] = useState(false);
  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    brand: product.brand,
    selectedImg: { ...product.images[0] },
    quantity: 1,
    price: product.price,
  });
  const router = useRouter();
  console.log(cartProducts);

  useEffect(() => {
    setIsProductInCart(false);
    if (cartProducts) {
      const existingIndex = cartProducts.findIndex(
        (item) => item.id === product.id
      );

      if (existingIndex > -1) {
        setIsProductInCart(true);
      }
    }
  }, [cartProducts]);

  const handleColorSelect = useCallback(
    (value: SelectedImg) => {
      setCartProduct((prev) => {
        return { ...prev, selectedImg: value };
      });
    },
    [cartProduct.selectedImg]
  );

  const handleQtyIncrease = useCallback(() => {
    setCartProduct((prev) => {
      return { ...prev, quantity: prev.quantity + 1 };
    });
  }, [cartProduct]);

  const handleQtyDecrease = useCallback(() => {
    if (cartProduct.quantity === 1) {
      return;
    }
    setCartProduct((prev) => {
      return { ...prev, quantity: prev.quantity - 1 };
    });
  }, [cartProduct]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <ProductImages
        cartProduct={cartProduct}
        product={product}
        handleColorSelect={handleColorSelect}
      ></ProductImages>
      <div>
        <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
        <Horizontal></Horizontal>
        <div className="text-justify">{product.description}</div>
        <Horizontal></Horizontal>
        <div>
          <span className="font-semibold">CATEGORIA: </span>
          {product.category}
        </div>
        <div>
          <span className="font-semibold">ETIQUETA: </span>
          {product.brand}
        </div>
        <div className={product.instock ? "text-rose-400" : "text-teal-400"}>
          {product.instock ? "Sin Stock" : "Disponible"}
        </div>
        <Horizontal></Horizontal>
        {isProductInCart ? (
          <>
            <p className="mb-2 text-slate-500 flex items-center gap-1">
              <MdCheckCircle
                className="text-teal-400"
                size={20}
              ></MdCheckCircle>
              <span>Producto agregado</span>
            </p>
            <Button
              onClick={() => router.push("/cart")}
              startContent={<RiShoppingBag3Line></RiShoppingBag3Line>}
              disableRipple={true}
              size="lg"
            >
              Ver el carrito
            </Button>
          </>
        ) : (
          <>
            <SetColor
              cartProduct={cartProduct}
              images={product.images}
              handColorSelect={handleColorSelect}
            ></SetColor>
            <Horizontal></Horizontal>
            <SetQuantity
              cartProduct={cartProduct}
              handleQtyIncrease={handleQtyIncrease}
              handleQtyDecrease={handleQtyDecrease}
            ></SetQuantity>
            <Horizontal></Horizontal>
            <div>
              <Button
                onClick={() => handleAddProductToCart(cartProduct)}
                startContent={<FiShoppingCart></FiShoppingCart>}
                disableRipple={true}
                size="lg"
                color="primary"
              >
                Agregar al carrito
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
