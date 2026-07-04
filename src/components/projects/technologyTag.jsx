import React from 'react';

import "./styles/technologyTag.css";

const TechnologyTag = ({ technology }) => {
    return (
        <p className='tag'>{technology}</p>
    )
}

export default TechnologyTag;