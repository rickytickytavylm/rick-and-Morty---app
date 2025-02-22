import s from "./CharacterCard.module.css";

export const CharacterCard = ({image,character,species}) => {
  return (
    <div className={s.card}>
      <img className={s.card__img} src={image} alt={character} />
      <h3>{character}</h3>
      <p>{species}</p>
    </div>
  );
};
