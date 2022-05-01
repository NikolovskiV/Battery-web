import Styles from "./Item.module.css";
// import smartHome from '../assets/images/smart-home.jpg';

export default function Item({ item, onClick }) {
  return (
    <div
      className={Styles.card}
      style={{ backgroundImage: `url(./images/${item.img})` }}
      onClick={() => {
        onClick();
      }}
    >
      <div className={Styles.cardFilter}>
        <h3 className={Styles.cardTitle}>{item.name}</h3>
      </div>
    </div>
  );
}
