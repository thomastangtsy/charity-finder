import { BookmarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { ChangeEventHandler, FC, useCallback, useState } from "react";

interface HeaderProps {
  search: (term: string) => void;
  navigateHome: () => void;
  navigateFavorites: () => void;
}

const Header: FC<HeaderProps> = ({
  search,
  navigateHome,
  navigateFavorites,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      setSearchTerm(event.currentTarget.value);
    },
    [setSearchTerm],
  );

  return (
    <header className="w-full bg-lime-900 text-white py-6">
      <div className="container mx-auto px-2 space-y-2 flex flex-col md:flex-row md:space-y-0 md:space-x-3 md:justify-between">
        <button
          className="text-3xl font-bold text-center select-none"
          onClick={navigateHome}
        >
          Charity Finder
        </button>
        <div className="flex justify-center">
          <input
            className="rounded-l bg-white p-2 text-lime-900 w-full max-w-[24rem] lg:w-[24rem]"
            type="text"
            placeholder="Search"
            onChange={onChange}
            value={searchTerm}
          />
          <button
            className="rounded-r bg-lime-600 p-2"
            onClick={() => search(searchTerm)}
          >
            <MagnifyingGlassIcon className="h-6 w-6" />
          </button>
          <button
            className="rounded bg-lime-600 p-2 ml-4"
            onClick={navigateFavorites}
          >
            <BookmarkIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
