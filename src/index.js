import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Online from "./components/IsOnline";
import UseContext from "./components/UseContext";
import UseRef from "./components/UseRef";
import UseRef2 from "./components/UseRef2";
import UseRef3 from "./components/UseRef3";
import UseCallback from "./components/hooks_useCallback/index";
import UseReducer from "./components/UseReducer";
import UseMemo from "./components/hooks_useMemo/index";
import Promise from "./components/promise/index";
import Async from "./components/async/await/index";
import Chaining from "./components/chaining/index";
import Closure from "./components/closure/index";
import Generator from "./components/generator/index";
import FirstPage from "./components/FirstPage";
import MernStack from "./mernStack/index";
// import reportWebVitals from './reportWebVitals';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Demo() {
  return (
    <>
      {/* <React.StrictMode> */}
      <BrowserRouter>
        <Routes>
          <Route path="UseContext" element={<UseContext />} />
          <Route path="UseRef" element={<UseRef />} />
          <Route path="UseRef2" element={<UseRef2 />} />
          <Route path="UseRef3" element={<UseRef3 />} />
          <Route path="UseReducer" element={<UseReducer />} />
          <Route path="UseCallback" element={<UseCallback />} />
          <Route path="UseMemo" element={<UseMemo />} />
          <Route path="Promise" element={<Promise />} />
          <Route path="/Async" element={<Async />} />
          <Route path="/Chaining" element={<Chaining />} />
          <Route path="/Closure" element={<Closure />} />
          <Route path="/Generator" element={<Generator />} />
          {/* <Route path="/MernStack" element={<MernStack />} /> */}
          <Route path="/" element={<FirstPage />} />
        </Routes>
      </BrowserRouter>
      {/* </React.StrictMode> */}
    </>
  );
}

ReactDOM.render(<Demo />, document.getElementById("root"));
