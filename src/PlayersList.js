// src/PlayersList.js
import React from 'react';
import Player from './Player';

const PlayersList = ({ players }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
