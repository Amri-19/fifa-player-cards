// src/App.js
import React, { useState } from 'react';
import PlayersList from './PlayersList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button } from 'react-bootstrap';
import Player from './Player';

const initialPlayers = [
  {
    name: 'Lionel Messi',
    team: 'Inter Miami',
    nationality: 'Argentine',
    jerseyNumber: 10,
    age: 37,
    imageURL: 'https://via.placeholder.com/150'
  },
  {
    name: 'Cristiano Ronaldo',
    team: 'Al Nassr',
    nationality: 'Portuguese',
    jerseyNumber: 7,
    age: 39,
    imageURL: 'https://via.placeholder.com/150'
  },
  {
    name: 'Kylian Mbappé',
    team: 'Paris Saint-Germain',
    nationality: 'French',
    jerseyNumber: 7,
    age: 25,
    imageURL: 'https://via.placeholder.com/150'
  },
  {
    name: 'Kevin De Bruyne',
    team: 'Manchester City',
    nationality: 'Belgian',
    jerseyNumber: 17,
    age: 32,
    imageURL: 'https://via.placeholder.com/150'
  }
];

const App = () => {
  const [players, setPlayers] = useState(initialPlayers);
  const [form, setForm] = useState({
    name: '',
    team: '',
    nationality: '',
    jerseyNumber: '',
    age: '',
    imageURL: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the new player to the list
    setPlayers([...players, form]);
    // Clear the form
    setForm({
      name: '',
      team: '',
      nationality: '',
      jerseyNumber: '',
      age: '',
      imageURL: ''
    });
  };

  return (
    <Container className="mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter player name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formTeam">
          <Form.Label>Team</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter player team"
            name="team"
            value={form.team}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formNationality">
          <Form.Label>Nationality</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter player nationality"
            name="nationality"
            value={form.nationality}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formJerseyNumber">
          <Form.Label>Jersey Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter player jersey number"
            name="jerseyNumber"
            value={form.jerseyNumber}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formAge">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter player age"
            name="age"
            value={form.age}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formImageURL">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter image URL"
            name="imageURL"
            value={form.imageURL}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Player
        </Button>
      </Form>
      <div className="mt-4">
        <PlayersList players={players} />
      </div>
    </Container>
  );
};

export default App;
