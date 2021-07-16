import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
    return (
    <ContentLoader 
        speed={2}
        width={350}
        height={237}
        viewBox="0 0 350 237"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="19" ry="19" width="350" height="237" />
      </ContentLoader>
    )
}

export default LoadingBlock;
