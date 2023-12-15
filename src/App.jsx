import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter basename="/latest/">
        <Routes>
          <Route index path="/" element={<Banner />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
/*changes*/
export default App;
