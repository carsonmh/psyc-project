import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./components/Main";
import Bibliography from "./components/Bibliography";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={"/"} element={<Main />} />
        <Route exact path={"/bibliography"} element={<Bibliography />} />
      </Routes>
    </Router>
  );
}

export default App;
