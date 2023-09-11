import { FC } from "react";

const NoFavorite: FC = () => {
  return (
    <div className="w-screen mt-12 flex flex-col items-center space-y-4 justify-center">
      <p className="text-6xl">🤷</p>
      <p>Your favorite list is empty!</p>
    </div>
  );
};

export default NoFavorite;
