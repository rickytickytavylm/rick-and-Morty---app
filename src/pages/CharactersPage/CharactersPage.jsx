import { useEffect, useState } from "react";
import { CharacterCard } from "../../components/CharacterCard/CharacterCard";
import { Input } from "../../components/Input/Input";
import s from "./CharactersPage.module.css";
import { Link } from "react-router-dom";
import { Selects } from "../../components/Selects/Selects";

const API_URL = import.meta.env.VITE_API_KEY;

export const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [nextPageUrl, setNextPageUrl] = useState(null);

  const fetchCharacters = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      setNextPageUrl(data.info.next);
      setCharacters((prev) => [...prev, ...data.results]);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const nextPageLoad = () => {
    if (nextPageUrl) {
      fetchCharacters(nextPageUrl);
    }
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleFilterChange = () => {
    const url = `${API_URL}/character?name=${searchValue}&species=${species}&gender=${gender}&status=${status}`;
    setCharacters([]);
    fetchCharacters(url);
  };

  useEffect(() => {
    handleFilterChange();
  }, [searchValue, species, gender, status]);

  const selects = [
    { label: "Species", options: ["Human", "Alien", "Robot"] },
    { label: "Gender", options: ["Male", "Female", "Unknown"] },
    { label: "Status", options: ["Alive", "Dead", "Unknown"] },
  ];

  const selectChanges = (label, value) => {
    if (label === "Species") {
      setSpecies(value);
    } else if (label === "Gender") {
      setGender(value);
    } else if (label === "Status") {
      setStatus(value);
    }
  };

  return (
    <>
      <div className={s.container}>
        <div className={s.logo}></div>
        <div className={s.filters}>
          <Input
            type="text"
            onInput={handleSearchChange}
            placeholder="Search"
          />
          <Selects data={selects} onChange={selectChanges} />
        </div>
      </div>

      <div className={s.cards}>
        {characters.map((character) => (
          <Link key={character.id} to={`/character/${character.id}`}>
            <CharacterCard
              character={character.name}
              species={character.species}
              image={character.image}
            />
          </Link>
        ))}
      </div>
      {nextPageUrl && <button onClick={nextPageLoad}>Load More</button>}
    </>
  );
};
