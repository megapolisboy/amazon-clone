import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { ProductExtendedType } from "./product";
//@ts-ignore
import Currency from "react-currency-formatter";
import { useAppDispatch } from "../app/hooks";
import { addToBasket, removeFromBasket } from "../features/basketSlice";

interface CheckoutProductProps {
  product: ProductExtendedType;
}

const CheckoutProduct: React.FC<CheckoutProductProps> = ({ product }) => {
  const { id, title, price, description, category, image, rating, hasPrime } =
    product;
  const dispatch = useAppDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket(product));
  };

  return (
    <div className="grid grid-cols-5 ">
      <Image src={image} width={200} height={200} objectFit="contain" />
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill(null)
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="my-2 text-xs line-clamp-3">{description}</p>
        <Currency quantity={price} currency="GBP" />

        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              className="w-12"
              src="https://links.papareact.com/fdw"
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>

      <div className="my-auto flex flex-col space-y-2 justify-self-end">
        <button className="button" onClick={addItemToBasket}>
          Add to Basket
        </button>
        <button className="button" onClick={removeItemFromBasket}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
};
export default CheckoutProduct;
