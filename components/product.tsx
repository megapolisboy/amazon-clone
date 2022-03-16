import { ProductType } from "../pages";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { useState } from "react";
//@ts-ignore
import Currency from "react-currency-formatter";

const MAX_RATING = 5;
const MIN_RATING = 1;

interface ProductProps {
  product: ProductType;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const { id, title, price, description, category, image } = product;
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const [hasPrime] = useState(Math.random() < 0.5);
  return (
    <div className="relative z-30 m-5 flex flex-col bg-white p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4 className="my-3">{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill(null)
          .map(() => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div>

      <p className="my-2 text-xs line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} currency="GBP" />
      </div>

      {hasPrime && (
        <div className="-mt-5 flex items-center space-x-2">
          <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}
      <button className="button mt-auto">Add to Basket</button>
    </div>
  );
};

export default Product;
