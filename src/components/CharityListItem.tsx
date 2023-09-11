import { MapPinIcon } from "@heroicons/react/20/solid";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import { FC } from "react";
import Charity from "../models/charity";

interface CharityListItemProps {
  charity: Charity;
}

const CharityListItem: FC<CharityListItemProps> = ({ charity }) => {
  return (
    <div className="border-2 border-lime-100 shadow-lg rounded-lg flex flex-col">
      <div className="bg-lime-100 p-2 flex space-x-2 items-center grow">
        <img className="h-8 w-8 rounded-full" src={charity.logoUrl} />
        <h1 className="text-lg font-bold">{charity.name}</h1>
      </div>
      <div className="shrink-0 p-2 space-y-2">
        <div className="flex gap-2 items-center italic text-neutral-500">
          <MapPinIcon className="shrink-0 h-4 w-4" />
          <p className="truncate">{charity.location}</p>
        </div>
        <p className="line-clamp-2">{charity.description}</p>
        <button className="flex ml-auto w-min align-right items-center justify-end space-x-1 rounded-full bg-lime-200 px-2">
          <p className="whitespace-nowrap text-sm italic">Know more</p>
          <ChevronDoubleRightIcon className="shrink-0 h-3 w-3" />
        </button>
      </div>
    </div>
  );
};

export default CharityListItem;
