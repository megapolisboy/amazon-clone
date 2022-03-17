import { GetServerSideProps, NextPage } from "next";
import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import Header from "../components/header";
import { Order } from "../firebase";

interface OrdersProps {
  orders: Order[];
}

const Orders: NextPage<OrdersProps> = ({ orders }) => {
  const { data } = useSession();

  return (
    <div>
      <Head>
        <title>Orders</title>
      </Head>
      <Header />
      <main className="mx-auto max-w-screen-lg p-10">
        <h1 className="mb-2 border-b border-yellow-400 pb-1 text-3xl">
          Your Orders
        </h1>

        {data ? <h2>x Orders</h2> : <h2>Please sign in to see your orders</h2>}
        <div className="mt-5 space-y-4"></div>
      </main>
    </div>
  );
};

export default Orders;

const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      props: {
        orders: [],
      },
    };
  } else {
    const orders: any[] = [];
    //fetch orders of    session.user?.email
    return {
      props: {
        orders,
      },
    };
  }
};
