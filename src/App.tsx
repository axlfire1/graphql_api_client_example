import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import NoPage from "./pages/no_page";

export default function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path='home' element={<Home />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  </BrowserRouter>
  );
}
