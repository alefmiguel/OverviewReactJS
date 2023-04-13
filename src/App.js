import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../src/Routes/Home";
import Contato from "../src/Routes/Contato";
import Mensagem from "../src/components/Mensagem/Mensagem";

function App() {
  return (
    <div className="App">
      <Router>
        <Mensagem />
        <Link
          style={{
            textDecoration: "none",
            color: "white",
            cursor: "pointer",
          }}
          to="/contato"
        >
          {" "}
          👉 CONTATO {""}
        </Link>

        <br></br>

        <Link
          style={{ textDecoration: "none", color: "white", cursor: "pointer" }}
          to="/"
        >
          {" "}
          👉 HOME {""}
        </Link>

        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
