import Container from "@/app/components/Container";

import React from "react";
import ProductDetail from "./ProductDetail";
import ListRating from "./ListRating";
import { products } from "@/utils/Products";

interface IParams {
  productId?: string;
}

const Product = ({ params }: { params: IParams }) => {
  const product = products.find((item) => item.id === params.productId);
  return (
    <div className="p-8">
      <Container>
        <ProductDetail product={product}></ProductDetail>
        <div className="flex flex-col mt-20 gap-4">
          <div>Agregar Review</div>
          <ListRating product={product}></ListRating>
        </div>
      </Container>
    </div>
  );
};

export default Product;
