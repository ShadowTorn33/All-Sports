import "./App.css";
import { Routes, Route } from "react-router";
import NavBar from "./Components/NavBar";
import Homepage from "./Pages/HomePage";
import SportslistPage from "./Pages/SportslistPage";
import LeaguesPage from "./Pages/LeaguesPage";
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sportslist/:id" element={<SportslistPage />} />
        <Route path="/leaguespage" element={<LeaguesPage />} />
      </Routes>
    </>
  );
}

export default App;
