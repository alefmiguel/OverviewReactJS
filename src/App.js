import "./App.css";
import Mensagem from "./components/Mensagem/Mensagem";
import Item from "./components/Item/Item";
import Evento from "./components/Eventos/Evento";
import Condicional from "./components/Condicional/Condicional";

function App() {
  return (
    <div className="App">
      <Mensagem />
      {/* <Item valor={1} />
      <Evento /> */}
      <Condicional />
    </div>
  );
}

export default App;
