import { getProduct } from "@/lib/loadproducts";
import { Button, Input, Separator } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const ProductDetails = async ({ params }) => {
  const { id } = await params;
  console.log(id);

  const products = await getProduct();
  const expectedProduct = products.find((product) => product.id == id);
  console.log(expectedProduct);

  return (
    <div className="max-w-11/12 h-fit mx-auto py-10 flex flex-col md:flex-row gap-5">
      <div className="border border-amber-100 rounded-sm w-full md:w-[40%] p-5">
        <div className="overflow-hidden w-full h-[350px] relative">
          <Image
            src={expectedProduct.image}
            alt={expectedProduct.name}
            fill
            className="object-cover rounded-lg transition-transform duration-300 hover:scale-125"
          />
        </div>
      </div>
      <div className="w-full md:w-[60%]">
        <div className="space-y-2">
          <h2 className="font-semibold text-2xl md:text-4xl">{expectedProduct.name}</h2>
          <span className="flex items-center gap-2">
            <FaStar className="text-yellow-300" /> {expectedProduct.rating}{" "}
            <span>rating</span>
          </span>
          <Separator></Separator>
        </div>

        <div className="py-4 space-y-1">
          <div className="flex justify-start items-start">
            <span className="w-1/2 font-medium">Brand:</span>
            <span className="w-1/2">{expectedProduct.brand}</span>
          </div>
          <div className="flex justify-start items-start">
            <span className="w-1/2 font-medium">Product ID:</span>
            <span className="w-1/2">{expectedProduct.id}</span>
          </div>
          <div className="flex justify-start items-start">
            <span className="w-1/2 font-medium">Product Category:</span>
            <span className="w-1/2">{expectedProduct.category}</span>
          </div>
          <div className="flex justify-start items-start">
            <span className="w-1/2 font-medium text-orange-200">
              Product Available In Stock:
            </span>
            <span className="w-1/2 font-semibold">{expectedProduct.stock}</span>
          </div>
        </div>
        <Separator></Separator>
        <div className="py-4 space-y-3">
          <h3 className="font-medium text-3xl md:text-4xl">$ {expectedProduct.price}</h3>
          <div className="space-x-5">
            <span className="font-bold">Qty</span>
            <Input
              defaultValue={"1"}
              className="w-15 rounded-sm text-center font-medium"
            ></Input>
            <Button>Buy Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
