import { useCallback, useState } from "react";
import DetailCharity from "../models/detailCharity";

const useCharityDetail = (apiKey: string) => {
  const [error, setError] = useState<Error | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [charity, setCharity] = useState<DetailCharity | undefined>(undefined);

  const fetch = useCallback(
    async (slug: string): Promise<void> => {
      let end = false;
      setLoading((nowLoading) => {
        if (nowLoading) end = true;
        return nowLoading;
      });
      if (end) return;

      setLoading(true);
      setError(undefined);
      setCharity(undefined);

      const params = new URLSearchParams({ apiKey }).toString();
      const encodedCause = encodeURIComponent(slug);
      const url = `https://partners.every.org/v0.2/nonprofit/${encodedCause}?${params}`;
      const response = await window.fetch(url);

      if (response.status === 200) {
        const responseJson = await response.json();
        const charityData = {
          ...responseJson.data.nonprofit,
          slug: responseJson.data.nonprofit.primarySlug,
          nonprofitTags: responseJson.data.nonprofitTags,
        } as DetailCharity;
        setCharity(charityData);
      } else {
        setError(new Error(await response.text()));
      }
      setLoading(false);
    },
    [apiKey],
  );

  return { charity, error, fetch, loading };
};

export default useCharityDetail;
