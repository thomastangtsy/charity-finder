import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

interface FrameProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const Frame: FC<FrameProps> = (props) => {
  return (
    <div className="w-full min-h-screen overflow-y-hidden overflow-x-auto">
      <Header {...props} />
      <Outlet />
    </div>
  );
};

export default Frame;
