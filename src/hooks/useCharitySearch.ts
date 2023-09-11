import { useCallback, useState } from "react";
import Charity from "../models/charity";
import { applyMinMax } from "../utils";

interface SearchOption {
  take?: number;
  page?: number;
}

const useCharitySearch = (apiKey: string) => {
  const [error, setError] = useState<Error | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [charities, setCharities] = useState<Array<Charity>>([]);

  const fetch = useCallback(
    async (term: string, option?: SearchOption): Promise<void> => {
      if (!term) {
        console.warn("Search term not provided when executing search.");
        return;
      }

      let end = false;
      setLoading((current) => {
        if (current) end = true;
        return current;
      });
      if (end) return;

      setLoading(true);
      setError(undefined);
      setCharities([]);

      const finalTake = applyMinMax(option?.take ?? 10, { min: 1, max: 50 });

      const params = new URLSearchParams({
        apiKey,
        take: `${finalTake}`,
      }).toString();
      const encodedTerm = encodeURIComponent(term);
      const url = `https://partners.every.org/v0.2/search/${encodedTerm}?${params}`;
      const response = await window.fetch(url);

      if (response.status === 200) {
        setCharities((await response.json()).nonprofits ?? []);
      } else {
        setError(new Error(await response.text()));
      }
      setLoading(false);
    },
    [apiKey],
  );

  return { charities, error, fetch, loading };
};

export default useCharitySearch;
