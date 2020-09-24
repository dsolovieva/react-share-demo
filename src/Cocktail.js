import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Cocktail = () => {
  const { cocktailId } = useParams();
  const [cocktail, setCocktail] = useState({});
  useEffect(() => {
    fetch(`/data/cocktails/${cocktailId}.json`)
      .then((response) => response.json())
      .then((data) => {
        setCocktail(data);
      });
  }, [cocktailId]);

  if (!cocktail) return null;

  return (
    <div>
      <h1>{cocktail.name}</h1>
      <img src={cocktail.image} alt={cocktail.name} />
      <p>{cocktail.description}</p>
    </div>
  );
};
