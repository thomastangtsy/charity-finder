import { FC, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import CharityDetail from "../components/CharityDetail";
import LoadingSpinner from "../components/LoadingSpinner";
import SearchError from "../components/SearchError";
import useCharityDetail from "../hooks/useCharityDetail";

const Charity: FC = () => {
  const params = useParams();
  const slug = useMemo(() => params.slug ?? "", [params]);

  const { fetch, ...detailState } = useCharityDetail(
    import.meta.env.VITE_EVERYORG_API_KEY,
  );

  useEffect(() => {
    if (slug) {
      fetch(slug);
    }
  }, [fetch, slug]);

  return (
    <div className="w-full">
      {detailState.loading ? (
        <LoadingSpinner />
      ) : detailState.error || detailState.charity === undefined ? (
        <SearchError />
      ) : (
        <CharityDetail charity={detailState.charity} />
      )}
    </div>
  );
};

export default Charity;
