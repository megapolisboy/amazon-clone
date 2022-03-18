import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from "firebase/firestore";
import { GetServerSideProps, NextPage } from "next";
import { Session } from "next-auth";
import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import Header from "../components/header";
import Order from "../components/order";
import { getOrdersFromFirebase, NewOrder, OrderType } from "../firebase";

interface OrdersProps {
  orders: NewOrder[];
  session: Session | null;
}

const Orders: NextPage<OrdersProps> = ({ orders, session }) => {
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

        {session ? (
          <h2>{orders.length} Orders</h2>
        ) : (
          <h2>Please sign in to see your orders</h2>
        )}

        <div className="mt-5 space-y-4">
          {orders?.map((order) => (
            <Order key={order.id} order={order} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Orders;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      props: {
        orders: [],
      },
    };
  } else {
    const orders: NewOrder[] = await getOrdersFromFirebase(
      session.user?.email || ""
    );

    console.log(orders);

    return {
      props: {
        orders,
        session,
      },
    };
  }
};
