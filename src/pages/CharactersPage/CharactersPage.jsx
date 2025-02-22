import { useEffect, useState } from "react";
import { CharacterCard } from "../../components/CharacterCard/CharacterCard";
import { Input } from "../../components/Input/Input";
import s from "./CharactersPage.module.css";
import { Link } from "react-router-dom";

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

  return (
    <>
      <div className={s.container}>
        <div className={s.logo}></div>
        <Input type="text" onInput={handleSearchChange} placeholder="Search" />

      
        <select onChange={(e) => setSpecies(e.target.value)}>
          <option value="">Species</option>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
          <option value="Robot">Robot</option>
        </select>

        <select onChange={(e) => setGender(e.target.value)}>
          <option value="">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="unknown">Unknown</option>
        </select>

        <select onChange={(e) => setStatus(e.target.value)}>
          <option value="">Status</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
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
