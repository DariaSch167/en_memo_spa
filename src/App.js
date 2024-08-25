import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import MainHome from "./components/MainHome/MainHome.jsx";
import MainListOfCards from "./components/MainListOfCards/MainListOfCards.jsx";
import MainCards from "./components/MainCards/MainCards.jsx";
import Missing from "./components/Missing/Missing.jsx";

function App() {
  return (
    <Router basename="/en_memo_spa">
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainHome />}></Route>
          <Route path="/list" element={<MainListOfCards />}></Route>
          <Route path="/cards" element={<MainCards />}></Route>
          <Route path="/*" element={<Missing />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
