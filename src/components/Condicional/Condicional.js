import styles from "./Condicional.module.css";
import { useState } from "react";

function Condicional() {
  const [name, setName] = useState();
  const [userName, setUserName] = useState();

  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  const [password, setPassword] = useState();
  const [userPassword, setUserPassword] = useState();

  function enviarDados() {
    setUserEmail(email);
    setUserPassword(password);
    setUserName(name);
  }

  function limparDados() {
    setUserEmail("");
    setUserPassword("");
    setUserName("");
  }

  return (
    <>
      <p className={styles.title}> Preencha seus dados: </p>

      <form className={styles.formulario}>
        <input
          required={true}
          type="text"
          placeholder="Digite seu nome..."
          onChange={(e) => setName(e.target.value)}
        />

        <input
          required={true}
          type="email"
          placeholder="Digite seu email..."
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          required={true}
          type="password"
          placeholder="Digite sua senha..."
          onChange={(e) => setPassword(e.target.value)}
        />

        <h3 type="submit" onClick={enviarDados}>
          Enviar
        </h3>

        {userEmail && userPassword && userName && (
          <div className={styles.containerEmail}>
            <section className={styles.dados}>
              <p> Usuário: {userName} </p>
              <p> Email: {userEmail} </p>
              <p> Senha: {userPassword} </p>
            </section>

            <h3 onClick={limparDados}> Limpar Dados </h3>
          </div>
        )}
      </form>
    </>
  );
}

export default Condicional;
