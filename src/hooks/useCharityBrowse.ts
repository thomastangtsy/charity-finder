import { useCallback, useState } from "react";
import { CauseType } from "../models/cause";
import Charity from "../models/charity";
import { applyMinMax } from "../utils";

interface BrowseOptions {
  take?: number;
  page?: number;
}

type FetchFunction = (
  cause: CauseType,
  options?: BrowseOptions,
) => Promise<void>;

const useCharityBrowse = (apiKey: string) => {
  const [error, setError] = useState<Error | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [charities, setCharities] = useState<Array<Charity>>([]);

  const fetch: FetchFunction = useCallback(
    async (cause, options?) => {
      let end = false;
      setLoading((nowLoading) => {
        if (nowLoading) end = true;
        return nowLoading;
      });
      if (end) return;

      setLoading(true);
      setError(undefined);
      setCharities([]);

      const finalTake = applyMinMax(options?.take ?? 10, { min: 1, max: 100 });
      const finalPage = applyMinMax(options?.page ?? 1, { min: 1 });

      const params = new URLSearchParams({
        apiKey,
        take: `${finalTake}`,
        page: `${finalPage}`,
      }).toString();
      const encodedCause = encodeURIComponent(cause);
      const url = `https://partners.every.org/v0.2/browse/${encodedCause}?${params}`;
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

export default useCharityBrowse;
