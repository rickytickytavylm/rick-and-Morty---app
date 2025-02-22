import s from "./EpisodePage.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card } from "../../components/Card/Card";

const API_URL = "https://rickandmortyapi.com/api";

export const EpisodePage = () => {
  const [episodes, setEpisodes] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [nextEpisodes, setNextEpisodes] = useState(null);

  // Функция для получения эпизодов с API
  const fetchEpisodes = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      setNextEpisodes(data.info.next);
      setEpisodes((prev) => [...prev, ...data.results]);
    } catch (error) {
      console.log("Error", error);
    }
  };

  // useEffect для вызова API, когда изменяется inputValue
  useEffect(() => {
    const url = `${API_URL}/episode?name=${inputValue}`;
    setEpisodes([]); // очищаем текущие эпизоды
    fetchEpisodes(url);
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Поиск по эпизодам"
      />
      <div className={s.cards}>
        {episodes.map((episode) => (
         <Link to={`/episode/${episode.id}`} key={episode.id}> <Card
            key={episode.id}
            name={episode.name}
            air_date={episode.air_date}
            episode={episode.episode}
          />
         </Link>
        ))}
      </div>

      {nextEpisodes && (
        <button onClick={() => fetchEpisodes(nextEpisodes)}>
          Загрузить больше эпизодов
        </button>
      )}
    </>
  );
};
