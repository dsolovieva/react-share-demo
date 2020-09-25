import React from "react";

const handleShareFacebook = () => {
  window.open(
    "http://www.facebook.com/sharer.php?u=https://dsolovieva.github.io/react-share-demo/#/cocktail/1",
    "pop",
    "width=600, height=400, scrollbars=no"
  );
};

const handleShareTwitter = () => {
  window.open(
    "http://twitter.com/intent/tweet?text=https://dsolovieva.github.io/react-share-demo/#/cocktail/1",
    "pop",
    "width=600, height=400, scrollbars=no"
  );
};

const handleSharePinterest = () => {
  window.open(
    "http://pinterest.com/pin/create/link/?url=https://dsolovieva.github.io/react-share-demo/#/cocktail/1&media=https://static.vinepair.com/wp-content/uploads/2020/04/bloodandsand_internal.jpg&description=hello",
    "pop",
    "width=600, height=400, scrollbars=no"
  );
};

export const Share = () => {
  return (
    <div>
      <div>
        <a href="http://twitter.com/intent/tweet?text=https://dsolovieva.github.io/react-share-demo/#/cocktail/1">
          Twitter
        </a>
      </div>
      <div>
        <button onClick={handleShareTwitter}>Twitter</button>
      </div>
      <div>
        <a
          href={`http://www.facebook.com/sharer.php?u=https://dsolovieva.github.io/react-share-demo/#/cocktail/1`}
        >
          Facebook
        </a>
      </div>
      <div>
        <button onClick={handleShareFacebook}>Facebook</button>
      </div>
      <div>
        <a href="http://pinterest.com/pin/create/link/?url=https://dsolovieva.github.io/react-share-demo/#/cocktail/1&media=https://static.vinepair.com/wp-content/uploads/2020/04/bloodandsand_internal.jpg&description=hello">
          Pinterest
        </a>
      </div>
      <div>
        <button onClick={handleSharePinterest}>Pinterest</button>
      </div>
    </div>
  );
};
