import Login from "./modules/Login";
import SignUp from "./modules/SignUp";
import Message from "./modules/Message";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Messages" element={<Message />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
