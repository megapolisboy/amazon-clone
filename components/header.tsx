import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
//@ts-ignore
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectNumberOfItems } from "../features/basketSlice";

const Header: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const numberOfItems = useSelector(selectNumberOfItems);

  return (
    <header>
      <div className="flex grow items-center bg-amazon_blue p-1 py-2">
        <div className="bg-yellow mt-2 flex grow items-center sm:grow-0">
          <Image
            onClick={() => router.push("/")}
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            alt="amazon emblem"
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div
          className="hidden h-10 grow cursor-pointer items-center 
        rounded-md bg-yellow-400 hover:bg-yellow-500 sm:flex"
        >
          <input
            type="text"
            className="h-full w-6 grow rounded-l-md p-2 px-4 outline-none"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* Right */}
        <div className="mx-6 flex flex-row space-x-6 text-xs text-white">
          <div
            onClick={!session ? () => signIn() : () => signOut()}
            className="link"
          >
            <p>{session ? `Hello, ${session.user?.name}` : "Sign In"}</p>
            <p className="linkParagraph">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="linkParagraph">& Orders</p>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className="link relative flex items-center"
          >
            <span
              className="absolute top-0 right-0 h-4 w-4 rounded-full 
            bg-yellow-400 text-center font-bold text-black md:right-10"
            >
              {numberOfItems}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="linkParagraph mt-2 hidden md:inline">Basket</p>
          </div>
        </div>
      </div>
      <div
        className="flex items-center space-x-3 bg-amazon_blue-light p-2
      pl-6 text-sm text-white"
      >
        <p className="link flex items-center">
          <MenuIcon className="mr-1 h-6" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
};
export default Header;
