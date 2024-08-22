// src/Player.js
import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Player = ({ name, team, nationality, jerseyNumber, age, imageURL }) => {
  return (
    <Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Img variant="top" src={imageURL} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Team: {team}</Card.Subtitle>
        <Card.Text>Nationality: {nationality}</Card.Text>
        <Card.Text>Jersey Number: {jerseyNumber}</Card.Text>
        <Card.Text>Age: {age}</Card.Text>
      </Card.Body>
    </Card>
  );
};

// Default Props
Player.defaultProps = {
  name: 'Unknown Player',
  team: 'Unknown Team',
  nationality: 'Unknown',
  jerseyNumber: 0,
  age: 0,
  imageURL: 'https://via.placeholder.com/150'
};

// Prop Types
Player.propTypes = {
  name: PropTypes.string,
  team: PropTypes.string,
  nationality: PropTypes.string,
  jerseyNumber: PropTypes.number,
  age: PropTypes.number,
  imageURL: PropTypes.string
};

export default Player;
