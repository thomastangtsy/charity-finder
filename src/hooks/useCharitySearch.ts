import { useCallback, useState } from "react";
import Charity from "../models/charity";
import { applyMinMax } from "../utils";

type FetchFunction = (term: string, take?: number) => Promise<void>;

const useCharitySearch = (apiKey: string) => {
  const [error, setError] = useState<Error | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [finished, setFinished] = useState(false);
  const [charities, setCharities] = useState<Array<Charity>>([]);

  const fetch: FetchFunction = useCallback(
    async (term, take) => {
      if (!term) {
        console.warn("Search term not provided when executing search.");
        return;
      }

      if (loading || finished) return;
      setLoading(true);
      setError(undefined);
      setCharities([]);

      const finalTake = applyMinMax(take ?? 10, { min: 1, max: 50 });

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
      setFinished(true);
      setLoading(false);
    },
    [apiKey, finished, loading],
  );

  return { charities, error, fetch, loading };
};

export default useCharitySearch;
