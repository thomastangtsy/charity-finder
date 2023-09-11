import { BookmarkIcon } from "@heroicons/react/24/solid";
import { FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NoFavorite from "../components/NoFavorite";
import useFavorite from "../hooks/useFavorite";

const Favorite: FC = () => {
  const { favorites, hasFavorite, toggleFavorite } = useFavorite();
  const navigate = useNavigate();

  const navigateCharity = useCallback(
    (slug: string) => {
      navigate(`/charity/${encodeURIComponent(slug)}`);
    },
    [navigate],
  );
  return favorites.length === 0 ? (
    <NoFavorite />
  ) : (
    <>
      <h1 className="text-center text-2xl font-semibold mt-4">Favorites</h1>
      <div className="w-full container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 py-4 px-2 md:px-0">
        {favorites.map((charity) => (
          <div
            key={charity.slug}
            className="bg-lime-100 shadow-lg rounded-lg px-2 flex justify-between space-x-2 items-center select-none"
          >
            <button
              className="grow py-2 text-lg font-semibold text-start"
              onClick={() => navigateCharity(charity.slug)}
            >
              {charity.name}
            </button>
            <button
              className={`shrink-0 h-8 w-8 ml-auto ${
                hasFavorite(charity.slug) ? "text-red-500" : "text-neutral-200"
              }`}
              onClick={() => toggleFavorite(charity)}
            >
              <BookmarkIcon />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Favorite;
