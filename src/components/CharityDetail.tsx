import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { FC, useEffect } from "react";
import DetailCharity from "../models/detailCharity";

interface CharityDetailProps {
  charity: DetailCharity;
}

const CharityDetail: FC<CharityDetailProps> = ({ charity }) => {
  useEffect(() => console.log(charity));
  return (
    <div className="w-full">
      {/* Backdrop */}
      <div className="absolute -z-50 w-full bg-lime-900 h-[16rem] lg:h-[24rem]">
        {charity.coverImageUrl && (
          <img
            className="w-full h-[16rem] lg:h-[24rem] object-cover"
            src={charity.coverImageUrl}
          />
        )}
      </div>
      <div className="absolute -z-50 w-full h-[16rem] lg:h-[24rem] bg-gradient-to-b from-transparent via-70% lg:via-90% via-transparent to-white" />
      {/* top padding box */}
      <div className="h-[10rem] lg:h-[14rem]" />
      {/* Icon and name box */}
      <div className="flex flex-col w-max max-w-[80%] mx-auto justify-center items-center bg-white shadow-xl rounded-xl p-4">
        <img
          className="rounded-full aspect-square	w-36 h-36 lg:w-36 lg:h-36"
          src={charity.logoUrl}
        />
        <p className="font-semibold text-3xl text-center">{charity.name}</p>
      </div>
      {/* Main content */}
      <div className="container mx-auto px-2 my-4 lg:flex lg:gap-4 ">
        {/* info pannel */}
        <div className="lg:w-96 border-2 border-lime-100 bg-lime-50 shadow-lg rounded-lg p-2 h-min space-y-4 mb-4">
          <h3 className="text-xl font-bold">Information</h3>
          {charity.locationAddress && (
            <div className="flex gap-2 items-center">
              <MapPinIcon className="shrink-0 h-4 w-4" />
              <p>{charity.locationAddress}</p>
            </div>
          )}
          {charity.websiteUrl && (
            <div className="flex gap-2 items-center">
              <GlobeAltIcon className="shrink-0 h-4 w-4" />
              <a
                className="text-lime-600 font-medium truncate"
                href={charity.websiteUrl}
                target="_blank"
              >
                {charity.websiteUrl}
              </a>
            </div>
          )}
          {charity.nonprofitTags && (
            <>
              <h3 className="text-xl font-bold">Tags</h3>
              {charity.nonprofitTags?.map((tag) => (
                <div
                  key={tag.title}
                  className="flex gap-1 items-center rounded-full bg-lime-300 w-fit pr-2"
                >
                  <img className="h-8 w-8 rounded-full" src={tag.tagImageUrl} />
                  <p>{tag.title}</p>
                </div>
              ))}
            </>
          )}
        </div>
        <div className="basis-3/4 justify-self-end space-y-4">
          {charity.description && (
            <div>
              <h3 className="text-xl font-bold">About</h3>
              <p>{charity.description}</p>
            </div>
          )}
          {charity.descriptionLong && (
            <div>
              <h3 className="text-xl font-bold">Learn more</h3>
              <p>{charity.descriptionLong}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CharityDetail;
