import React, { Component } from 'react';

const CharacterCard = ({character, rank, deletePeople}) => (
  <section>
    <img src="https://www.lcps.org/cms/lib/VA01000195/Centricity/Domain/4654/avatar-1577909_960_720.png" />
    <h1>Character Name: {character.name}</h1>
    <h4>Rank #{rank + 1}</h4>
    <p>Height: {character.height}cm</p>
    <p>Eye Color: {character.eye_color}</p>
    <button onClick={() => deletePeople(character.name)}>Delete?</button>
  </section>
)

export default CharacterCard