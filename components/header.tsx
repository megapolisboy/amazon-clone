import Image from 'next/image'
import { SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'

const Header: React.FC = () => {
  return (
    <header>
      <div className="flex grow items-center bg-amazon_blue p-1 py-2">
        <div className="bg-yellow mt-2 flex grow items-center sm:grow-0">
          <Image
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
          <div className="link">
            <p>Hello, OOPPRO!</p>
            <p className="linkParagraph">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="linkParagraph">& Orders</p>
          </div>
          <div className="link relative flex items-center">
            <span
              className="absolute top-0 right-0 h-4 w-4 rounded-full 
            bg-yellow-400 text-center font-bold text-black md:right-10"
            >
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="linkParagraph mt-2 hidden md:inline">Basket</p>
          </div>
        </div>
      </div>
      <div></div>
    </header>
  )
}
export default Header
