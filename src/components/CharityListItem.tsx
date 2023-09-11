import { MapPinIcon } from "@heroicons/react/20/solid";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import { FC } from "react";
import Charity from "../models/charity";

interface CharityListItemProps {
  charity: Charity;
  navigateCharity: (slug: string) => void;
}

const CharityListItem: FC<CharityListItemProps> = ({
  charity,
  navigateCharity,
}) => {
  const onClick = () => navigateCharity(charity.slug);

  return (
    <div className="border-2 border-lime-100 shadow-lg rounded-lg flex flex-col">
      <button
        className="shrink-0 bg-lime-100 p-2 flex space-x-2 items-center select-none"
        onClick={onClick}
      >
        <img className="h-8 w-8 rounded-full" src={charity.logoUrl} />
        <h1 className="text-lg font-bold text-start">{charity.name}</h1>
      </button>
      <div className="grow p-2 space-y-2 flex flex-col">
        {charity.location && (
          <div className="flex gap-2 items-center italic text-neutral-500">
            <MapPinIcon className="shrink-0 h-4 w-4" />
            <p className="truncate">{charity.location}</p>
          </div>
        )}
        {charity.description && (
          <p className="line-clamp-2">{charity.description}</p>
        )}
        <div className="grow flex">
          <button
            className="flex mt-auto ml-auto w-min align-right items-center justify-end space-x-1 rounded-full bg-lime-200 px-2"
            onClick={onClick}
          >
            <p className="whitespace-nowrap text-sm italic">Know more</p>
            <ChevronDoubleRightIcon className="shrink-0 h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharityListItem;
