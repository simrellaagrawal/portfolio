import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Portfolio from "./Components/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />}>
         </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
