import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Component/Nav";
import Home from "./Pages/Home";
import Hollywood from "./Pages/Hollywood";
import Bollywood from "./Pages/Bollywood";
import Technology from "./Pages/Technology";
import Fitness from "./Pages/Fitness";
import SingleBlogPage from "./Pages/SingleBlogPage";
import Details from "./Pages/Details";
import DetailPage from "./Pages/DetailPage";
import Foods from "./Pages/Foods";


function App() {
  return (
    <div className="App">
      <Details>
        
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='bollywood' element={<Bollywood />} />
            <Route path='technology' element={<Technology />} />
            <Route path='hollywood' element={<Hollywood />} />
            <Route path='fitness' element={<Fitness />} />
            <Route path='food' element={<Foods />} />
            <Route path=":category/articleid" element={<SingleBlogPage />} />
            <Route path="*" element={<DetailPage />} />
          </Routes>
        </BrowserRouter>
      </Details>
    </div>
  )
}
export default App;
