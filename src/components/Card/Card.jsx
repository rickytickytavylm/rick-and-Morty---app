import s from "./Card.module.css";

export const Card = ({ key, name, type }) => {
  return (
    <div className={s.card}>
      <h3>{name}</h3>
      <p>{type}</p>
    </div>
  );
};
