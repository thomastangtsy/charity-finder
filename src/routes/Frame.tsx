import { FC, useCallback } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Frame: FC = () => {
  const navigate = useNavigate();

  const navigateSearch = useCallback(
    (term: string) => {
      const params = new URLSearchParams({ query: term });
      navigate(`/?${params.toString()}`);
    },
    [navigate],
  );

  const navigateHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full min-h-screen overflow-y-hidden overflow-x-auto">
      <Header search={navigateSearch} navigateHome={navigateHome} />
      <Outlet />
    </div>
  );
};

export default Frame;
