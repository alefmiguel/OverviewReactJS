import styles from "./Mensagem.module.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";

function Mensagem() {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>
        <FaFacebook /> APP PAGE <FaInstagram />
      </h1>
    </div>
  );
}

export default Mensagem;
