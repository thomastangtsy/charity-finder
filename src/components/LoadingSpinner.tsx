import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { FC } from "react";

const LoadingSpinner: FC = () => {
  return (
    <div className="w-screen mt-12 flex flex-col items-center justify-center">
      <ArrowPathIcon className="animate-spin h-12 w-12" />
      <p>loading</p>
    </div>
  );
};

export default LoadingSpinner;
