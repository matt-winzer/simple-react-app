import React from 'react';
import CharacterCard from './CharacterCard'

const CharacterList = ({characters = [], count = 0, deletePeople, getPeople}) => {
  // const characters = props.characters
  // const getFart = props.getPeople
  // const count = props.count || 0

  // console.table(characters)

  return <div>
    <button onClick={getPeople}>Refresh</button>
    <legend>Count: {count}</legend>
    {characters.map((character, index) => {
      return <CharacterCard key={character.name} deletePeople={deletePeople} character={character} rank={index} />
    })}
  </div>
}


export default CharacterList