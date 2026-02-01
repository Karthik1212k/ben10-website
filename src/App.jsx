import { BrowserRouter, Routes, Route } from "react-router-dom";
import EnterPage from "./components/EnterPage";
import IntroPage from "./components/IntroPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EnterPage />} />
        <Route path="/intro" element={<IntroPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
