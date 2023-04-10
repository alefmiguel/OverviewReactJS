import { useState } from "react";
import styles from "./Evento.module.css";
import BotaoTeste from "./BotaoTeste";

function Evento() {
  function meuEvento() {
    console.log("O evento foi disparado!");
    alert("O evento foi disparado!");
  }

  function alteraTxt() {
    const txt = document.querySelector("h2");
    const valor = document.querySelector("input");
    txt.textContent = valor.value;
    setTexto(valor.value);
    console.log(`Texto alterado: ${texto}`);
  }

  function puxaDados() {
    const dado = document.querySelector("h3").textContent;
    alert(dado);
  }

  const [texto, setTexto] = useState();

  return (
    <>
      <h3 onClick={meuEvento}> CRIAR EVENTO </h3>
      <input
        type="text"
        placeholder="Digite para aparecer abaixo"
        onChange={alteraTxt}
      />
      <h2> Valor que será mudado </h2>
      <BotaoTeste event={puxaDados} />
    </>
  );
}

export default Evento;
