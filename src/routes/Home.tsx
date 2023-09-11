import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import CharityList from "../components/CharityList";
import LoadingSpinner from "../components/LoadingSpinner";
import NoResult from "../components/NoResult";
import SearchError from "../components/SearchError";
import useCharityBrowse from "../hooks/useCharityBrowse";
import useCharitySearch from "../hooks/useCharitySearch";
import causes from "../models/cause";

const Home: FC = () => {
  const cause = useMemo(
    () => causes[Math.floor(Math.random() * causes.length)],
    [],
  );

  const [isBrowseFetched, setIsBrowseFetched] = useState(false);
  const [searchParam] = useSearchParams();
  const query = useMemo(() => searchParam.get("query") ?? "", [searchParam]);

  const { fetch: fetchBrowse, ...browseState } = useCharityBrowse(
    import.meta.env.VITE_EVERYORG_API_KEY,
  );
  const { fetch: fetchSearch, ...searchState } = useCharitySearch(
    import.meta.env.VITE_EVERYORG_API_KEY,
  );

  useEffect(() => {
    if (query) {
      console.log(query);
      fetchSearch(query, { take: 12 });
    }
  }, [fetchSearch, query]);

  useEffect(() => {
    if (!query && !isBrowseFetched) {
      setIsBrowseFetched(true);
      fetchBrowse(cause, { take: 12 });
    }
  }, [cause, fetchBrowse, isBrowseFetched, query]);

  const navigate = useNavigate();
  const navigateCharity = useCallback(
    (slug: string) => {
      navigate(`/charity/${encodeURIComponent(slug)}`);
    },
    [navigate],
  );

  return (
    <div className="w-full">
      {(query && searchState.loading) || (!query && browseState.loading) ? (
        <LoadingSpinner />
      ) : (query && searchState.error) || (!query && browseState.error) ? (
        <SearchError />
      ) : (query && !searchState.charities.length) ||
        (!query && !browseState.charities.length) ? (
        <NoResult />
      ) : (
        <CharityList
          charities={query ? searchState.charities : browseState.charities}
          navigateCharity={navigateCharity}
        />
      )}
    </div>
  );
};

export default Home;
