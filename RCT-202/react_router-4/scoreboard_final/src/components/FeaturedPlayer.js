import React from 'react';

const FeaturedPlayer = ({match}) => {
  let name = match.params.name;
  let score = match.params.score;
  return (
    <div className="main-content">
      <h2>{name}</h2>
      <p>Introducing <strong>{name}</strong>, the player with an outstanding <strong>{score}</strong> point score!</p>
    </div>
  );
}

export default FeaturedPlayer;