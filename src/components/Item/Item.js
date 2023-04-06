import Proptypes from "prop-types";
import styles from "./Item.module.css";

function Item({ valor }) {
  return (
    <div className={styles.container}>
      <li> item {valor} </li>
      <li> item {valor} </li>
      <li> item {valor} </li>
    </div>
  );
}

Item.propTypes = {
    valor: Proptypes.number.isRequired,
};

Item.defaultProps = {
    valor: 2
}

export default Item;
