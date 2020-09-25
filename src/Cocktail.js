import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import { Share } from "./Share";

export const Cocktail = () => {
  const { cocktailId } = useParams();
  const [cocktail, setCocktail] = useState({});
  useEffect(() => {
    fetch(`data/cocktails/${cocktailId}.json`)
      .then((response) => response.json())
      .then((data) => {
        setCocktail(data);
      });
  }, [cocktailId]);

  if (!cocktail) return null;

  return (
    <div>
      <Helmet>
        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:title" content="Cocktails App" />
        <meta name="twitter:description" content="Let's shake it" />
        <meta name="twitter:image" content={cocktail.image} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content="Cocktails App" />
        <meta property="og:description" content="Let's shake it" />
        <meta property="og:image" content={cocktail.image} />
      </Helmet>
      <h1>{cocktail.name}</h1>
      <img src={cocktail.image} alt={cocktail.name} />
      <p>{cocktail.description}</p>
      <Share />
    </div>
  );
};
