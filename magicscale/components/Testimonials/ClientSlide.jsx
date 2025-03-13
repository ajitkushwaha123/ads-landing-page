import React from 'react'
import SpotLightCard from './SpotLightCard'

const ClientSlide = ({img}) => {
  return (
    <div>
      <SpotLightCard
        className="custom-spotlight-card w-[320px] md:w-[auto] h-[260px]"
        spotlightColor="rgba(0, 229, 255, 0.2)"
      >
        <img src={img}/>
        </SpotLightCard>
    </div>
  );
}

export default ClientSlide
