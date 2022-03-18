import { NewOrder } from "../firebase";
//@ts-ignore
import Currency from "react-currency-formatter";

interface OrderProps {
  order: NewOrder;
}

const Order: React.FC<OrderProps> = ({ order }) => {
  const { id, amount, amountShipping, timestamp, images } = order;
  return (
    <div className="relative rounded-md border">
      <div
        className="flex items-center space-x-10 bg-gray-100 p-5 text-sm 
      text-gray-600"
      >
        <div>
          <p className="text-xs font-bold">ORDER PLACED</p>
          <p>{timestamp}</p>
        </div>
        <div>
          <p className="text-sm font-bold">TOTAL</p>
          <p>
            <Currency quantity={amount} currency="GBP" /> - Next Day Delivery{" "}
            <Currency quantity={amountShipping} currency="GBP" />
          </p>
        </div>

        <p
          className="flex-1 self-end whitespace-nowrap text-right text-xs text-blue-500
        sm:text-xl"
        >
          {images.length} items
        </p>

        <p
          className="absolute top-2 right-2 w-40 truncate whitespace-nowrap text-xs 
        lg:w-72"
        >
          ORDER # {id}
        </p>
      </div>

      <div className="p-5 sm:p-10 ">
        <div className="flex space-x-6 overflow-x-auto">
          {images.map((image) => (
            <img src={image} className="h-20 object-contain sm:h-32" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
