import React from 'react';
import ContentLoader from "react-content-loader";

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="141" cy="125" r="125" />
      <rect x="1" y="268" rx="5" ry="5" width="280" height="25" />
      <rect x="-1" y="312" rx="10" ry="10" width="280" height="85" />
      <rect x="0" y="421" rx="5" ry="5" width="102" height="26" />
      <rect x="149" y="411" rx="30" ry="30" width="127" height="44" />
    </ContentLoader>
  )
}

export default LoadingBlock;
