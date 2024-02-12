"use client";

import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import Heading from "../components/Heading";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Button,
} from "@nextui-org/react";
import ItemContent from "./ItemContent";

function CartClient() {
  const { cartProducts, handleClearCart, carTotalAmount } = useCart();

  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className="flex flex-col items-center">
        <div className="text-2xl">Tu carrito esta vacio</div>
        <div>
          <Link
            href={"/"}
            className="text-slate-500 flex items-center gap-1 mt-2"
          >
            <FaArrowLeft></FaArrowLeft>
            <span>Ir a comprar</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Heading title="Carrito" center></Heading>
      <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center mt-8">
        <div className="col-span-2 justify-self-start">PRODUCTOS</div>
        <div className="justify-self-center">PRECIO</div>
        <div className="justify-self-center">CANTIDAD</div>
        <div className="justify-self-end">TOTAL</div>
      </div>
      <div>
        {cartProducts &&
          cartProducts.map((item) => {
            return <ItemContent key={item.id} item={item}></ItemContent>;
          })}
      </div>
      <div className="border-t-[1.5px] border-slate-200 py-4 flex justify-between gap-4">
        <div className="w-[90px]">
          <Button
            onClick={() => {
              handleClearCart();
            }}
            disableRipple
          >
            Limpiar Carrito
          </Button>
        </div>
        <div className="text-sm flex flex-col gap-1 items-start">
          <div className="flex justify-between w-full text-base font-semibold">
            <span>SubTotal</span>
            <span>S/{carTotalAmount}</span>
          </div>
          <p className="text-slate-500">
            Impuestos y envío calculados al pagar
          </p>
          <Button
            disableRipple
            onClick={() => {}}
            color="primary"
            className="w-full"
          >
            Pagar
          </Button>
          <Link
            href={"/"}
            className="text-slate-500 flex items-center gap-1 mt-2"
          >
            <FaArrowLeft></FaArrowLeft>
            <span>Ir a comprar</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartClient;
