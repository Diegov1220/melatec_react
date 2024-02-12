import React from "react";
import Container from "../components/Container";
import CartClient from "./CartClient";

function Cart() {
  return (
    <div className="pt-8">
      <Container>
        <CartClient></CartClient>
      </Container>
    </div>
  );
}

export default Cart;
