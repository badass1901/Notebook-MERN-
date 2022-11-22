import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
// import Signup from "./components/Signup";
import NoteState from "./context/notes/NoteState";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <div className="parent">
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/login" element={<Login />}></Route>
                {/* <Route path="/signup" element={<Signup />}></Route> */}
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
