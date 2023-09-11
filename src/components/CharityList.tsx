import { FC } from "react";
import Charity from "../models/charity";
import CharityListItem from "./CharityListItem";

interface CharityListProps {
  charities: Array<Charity>;
}

const CharityList: FC<CharityListProps> = ({ charities }) => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 py-4 px-2 md:px-0">
      {charities.map((charity) => (
        <CharityListItem key={charity.slug} charity={charity} />
      ))}
    </div>
  );
};

export default CharityList;
