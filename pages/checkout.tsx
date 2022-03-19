import { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  clearBasket,
  selectItems,
  selectNumberOfItems,
  selectTotal,
} from "../features/basketSlice";
import CheckoutProduct from "../components/checkoutProduct";
import nextId from "react-id-generator";
//@ts-ignore
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/router";
import { addOrderToFirebase } from "../firebase";

const Checkout: NextPage = () => {
  const items = useAppSelector(selectItems);
  const numberOfItems = useAppSelector(selectNumberOfItems);
  const { data } = useSession();
  const total = useAppSelector(selectTotal);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const checkOut = () => {
    addOrderToFirebase(data?.user?.email || "", {
      amount: total,
      amountShipping: 6.99,
      images: items.map((item) => item.image),
      timestamp: new Date().getTime(),
    })
      .then(() => {
        router.push("/success");
        dispatch(clearBasket());
      })
      .catch((err: Error) => console.error(err));
  };

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Checkout</title>
      </Head>
      <Header />
      <main className="mx-auto max-w-screen-2xl lg:flex">
        {/* Left */}
        <div className="grow shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col space-y-10 bg-white p-5">
            <h1 className="border-b pb-4 text-3xl">
              {items.length === 0
                ? "Your Amazon Basket is empty"
                : "Shopping Basket"}
            </h1>

            {items.map((item, index) => (
              <CheckoutProduct key={nextId()} product={item} />
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col bg-white p-10 shadow-md">
          {numberOfItems > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({numberOfItems} items):{" "}
                <span className="font-bold">
                  <Currency quantity={total} currency="GBP" />
                </span>
              </h2>

              <button
                role="link"
                onClick={checkOut}
                disabled={!data}
                className={`button mt-2 ${
                  !data &&
                  "cursor-not-allowed border-gray-200 from-gray-300 to-gray-500 text-gray-300"
                }`}
              >
                {!data ? "Sign in to checkout" : "Proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Checkout;
