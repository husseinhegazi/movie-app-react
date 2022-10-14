import "./App.css";
import NavBar from "./component/NavBar/NavBar"
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home"
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import Search from "./component/Search/Search";

function App() {
  return <>
  <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search-movie" element={<Search/>} />
        <Route path="/movie-details/:id" element={<MovieDetails/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  </>;
}

export default App;
