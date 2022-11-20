import { Route, Routes } from "react-router-dom";
import "./App.css";
import Content from "./Components/Content/Content";
import { BrowserRouter } from "react-router-dom";
// import Header from "./Components/Header/Header";
import Portfolio from "./Components/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />}>
          <Route index element={<Content />}></Route>
          <Route path="#" element={<></>}></Route>
          <Route path="#" element={<></>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Content /> */}
    </div>
  );
}

export default App;
