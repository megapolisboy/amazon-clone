import { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header";
import Image from "next/image";

const Checkout: NextPage = () => {
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
            <h1 className="border-b pb-4 text-3xl">Your Shopping Basket</h1>
          </div>
        </div>

        {/* Right */}
        <div></div>
      </main>
    </div>
  );
};
export default Checkout;
