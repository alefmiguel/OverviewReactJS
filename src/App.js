import "./App.css";
import Mensagem from "./components/Mensagem/Mensagem";
// import Item from "./components/Item/Item";
// import Evento from "./components/Eventos/Evento";
// import Condicional from "./components/Condicional/Condicional";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Outros/Navbar";

function App() {
  return (
    <div className="App">
      <Mensagem />
      <Navbar />
      {/* <Item valor={1} />
      <Evento /> */}
      {/* <Condicional /> */}
      <Outlet />
    </div>
  );
}

export default App;
