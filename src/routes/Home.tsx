import { FC, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
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
      fetchSearch(query, 12);
    } else {
      fetchBrowse(cause, { take: 12 });
    }
  }, [cause, fetchBrowse, fetchSearch, query]);

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
        />
      )}
    </div>
  );
};

export default Home;
