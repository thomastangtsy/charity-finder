import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Frame from "./routes/Frame";
import Home from "./routes/Home";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Frame />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
