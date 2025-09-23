import { Routes, Route } from "react-router-dom";

import Rreth from './pages/RrethNesh/Reth'
import Sherbime from "./pages/Sherbimet/Sherbime";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import Kontakte from "./pages/Kontakte/Kontakte";
  
  
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rreth" element={<Rreth />} />
      <Route path="/sherbime" element={<Sherbime />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/Kontakto" element={<Kontakte />} />
    </Routes>
  )
}

export default App
