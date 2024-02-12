"use client";

import React from "react";
import { BsCart2 } from "react-icons/bs";
import { Badge, Avatar, Switch, Button } from "@nextui-org/react";
import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";

function CartCount() {
  const { cartTotalQty } = useCart();
  const router = useRouter();

  return (
    <div className="relative cursor-pointer">
      <Badge color="danger" content={cartTotalQty} shape="circle">
        <Button
          radius="full"
          isIconOnly
          aria-label="more than 99 notifications"
          variant="light"
          onClick={() => router.push("/cart")}
          disableRipple
        >
          <BsCart2 size={30} />
        </Button>
      </Badge>
    </div>
  );
}

export default CartCount;
