import React from 'react';
import CharacterCard from './CharacterCard'

const CharacterList = (props) => {
  const characters = props.characters
  console.log('characters', characters)

  return characters.map((character, index) => {
   return <CharacterCard key={character.name} character={character} rank={index} />
  })
}


export default CharacterList