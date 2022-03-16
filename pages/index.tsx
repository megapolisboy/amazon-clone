import axios from "axios";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Banner from "../components/banner";
import Header from "../components/header";
import ProductFeed from "../components/productFeed";

export interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface HomeProps {
  products: ProductType[];
}

const Home: NextPage<HomeProps> = ({ products }) => {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon Clone</title>
      </Head>
      <Header />
      <main className="mx-auto max-w-screen-2xl">
        {/* Banner */}
        <Banner />

        {/* ProductFeed */}
        <ProductFeed products={products} />
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const products = await axios.get("https://fakestoreapi.com/products");

  return {
    props: {
      products: products.data,
    },
  };
};
