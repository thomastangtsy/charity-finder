import { FC } from "react";

const NoResult: FC = () => {
  return (
    <div className="w-screen mt-12 flex flex-col items-center space-y-4 justify-center">
      <p className="text-6xl">🤷</p>
      <p>No result.</p>
    </div>
  );
};

export default NoResult;
