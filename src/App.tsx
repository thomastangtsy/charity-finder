import { FC, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Frame from "./routes/Frame";

const App: FC = () => {
  const [searchTerm, setSerchTerm] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Frame searchTerm={searchTerm} setSearchTerm={setSerchTerm} />
          }
        >
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
