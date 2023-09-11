import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Charity from "./routes/Charity";
import Favorite from "./routes/Favorite";
import Frame from "./routes/Frame";
import Home from "./routes/Home";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Frame />}>
          <Route path="/" element={<Home />} />
          <Route path="charity/:slug" element={<Charity />} />
          <Route path="/favorites" element={<Favorite />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
