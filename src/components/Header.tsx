import { BookmarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { ChangeEventHandler, FC, useCallback, useState } from "react";

interface HeaderProps {
  search: (term: string) => void;
  navigateHome: () => void;
}

const Header: FC<HeaderProps> = ({ search, navigateHome }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      setSearchTerm(event.currentTarget.value);
    },
    [setSearchTerm],
  );

  return (
    <header className="w-full bg-lime-900 text-white px-4 py-6 space-y-2 flex flex-col lg:flex-row lg:space-y-0 lg:space-x-3 lg:justify-between">
      <h1 className="text-3xl font-bold text-center" onClick={navigateHome}>
        Charity Finder
      </h1>
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
        <button className="rounded bg-lime-600 p-2 ml-4">
          <BookmarkIcon className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;
