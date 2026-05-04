import React from 'react';
import {Button, Card} from "@heroui/react";
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import Link from 'next/link';


const ProductCard = ({product}) => {
    return (
         <Card className="w-full">
      <div className="w-full rounded-2xl">
        <Image className='rounded-2xl h-70 w-full' src={product.image} width={400} height={400} alt={product.name}></Image>
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <Card.Header className="gap-2">
          <Card.Title className="pr-8 font-semibold text-xl">{product.name}</Card.Title>
          <Card.Description>
            {product.description}
          </Card.Description>
         
        </Card.Header>

        <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex justify-between items-center gap-4">
            <span className="text-lg font-semibold text-foreground">$ {product.price}</span>
            <div className="text-sm flex items-center gap-1">
                <span ><FaStar className='text-yellow-300' /></span>
                <span>{product.rating}</span>

                </div>
          </div>
          <Button className="w-full sm:w-auto">
            <Link href= {`/product-details/${product.id}`} >View Details</Link>
            </Button>
        </Card.Footer>
      </div>
    </Card>
    );
};

export default ProductCard;