import React from "react";

export const Share = () => {
  return (
    <div>
      <div>
        <a href="http://twitter.com/intent/tweet?text=https://dsolovieva.github.io/react-share-demo/#/cocktail/1">
          Twitter
        </a>
      </div>
      <div>
        <a
          href={`http://www.facebook.com/sharer.php?u=https://dsolovieva.github.io/react-share-demo/#/cocktail/1`}
        >
          Facebook
        </a>
      </div>
      <div>
        <a href="http://pinterest.com/pin/create/link/?url=https://dsolovieva.github.io/react-share-demo/#/cocktail/1&media=https://static.vinepair.com/wp-content/uploads/2020/04/bloodandsand_internal.jpg&description=hello">
          Pinterest
        </a>
      </div>
    </div>
  );
};
