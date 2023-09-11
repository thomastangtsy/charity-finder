import { useCallback } from "react";
import { useLocalStorage } from "usehooks-ts";
import CharityBase from "../models/charityBase";

const useFavorite = () => {
  const [favorites, setFavorites] = useLocalStorage<Array<CharityBase>>(
    "favorites",
    [],
  );

  const addFavorite = useCallback(
    (charity: CharityBase) => {
      setFavorites((list) => {
        return list.concat([{ name: charity.name, slug: charity.slug }]);
      });
    },
    [setFavorites],
  );

  const removeFavorite = useCallback(
    (slug: string) => {
      setFavorites((list) => {
        const index = list.findIndex((f) => f.slug === slug);
        if (index !== -1) {
          return list.slice(index, 1);
        } else {
          return list;
        }
      });
    },
    [setFavorites],
  );

  const toggleFavorite = useCallback(
    (charity: CharityBase) => {
      setFavorites((list) => {
        const index = list.findIndex(({ slug }) => slug === charity.slug);
        if (index === -1) {
          return list.concat([{ name: charity.name, slug: charity.slug }]);
        } else {
          list.splice(index, 1);
          return list;
        }
      });
    },
    [setFavorites],
  );

  const hasFavorite = useCallback(
    (slug: string) => {
      return favorites.findIndex((charity) => slug === charity.slug) !== -1;
    },
    [favorites],
  );

  return {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    hasFavorite,
  };
};

export default useFavorite;
