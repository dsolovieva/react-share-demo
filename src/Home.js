import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const [cocktails, setCocktails] = useState([]);
  useEffect(() => {
    fetch("/data/cocktails.json")
      .then((response) => response.json())
      .then((data) => {
        setCocktails(data);
      });
  }, []);

  return (
    <ul>
      {cocktails &&
        cocktails.map((cocktail) => (
          <li key={cocktail.id}>
            <Link to={`/cocktail/${cocktail.id}`}>{cocktail.name}</Link>
          </li>
        ))}
    </ul>
  );
};
