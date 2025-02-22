import s from "./LocationPage.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card } from "../../components/Card/Card";
const API_URL = "https://rickandmortyapi.com/api";
export const LocationPage = () => {
  const [locations, setLocations] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [nextLocations, setNextLocations] = useState(null);

  const fetchLocation = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      setNextLocations(data.info.next);
      setLocations((prev) => [...prev, ...data.results]);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    console.log("работает");

    const url = `${API_URL}/location?name=${inputValue}`;
    setLocations([]);
    fetchLocation(url);
  }, [inputValue]);

  return (
    <>
      <img src="" alt="" />
      <input type="text" />
      <div className={s.cards}>
        {locations.map((location) => (
          <Link to={`/location/${location.id}`}>
            {" "}
            <Card key={location.id} name={location.name} type={location.type} />
          </Link>
        ))}
      </div>
    </>
  );
};
