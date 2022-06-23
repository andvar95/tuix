import React, { useState} from 'react'
import CharacterContext from './CharacterContext';
import data from "../data/data.json"

const CharacterState = ({children}) =>{

    const [characters, setCharacters] = useState(data);
    const [selectedCharacter, setSelectedCharacter] = useState([]);
    
    const addCharacter = (character) => setSelectedCharacter([character,...selectedCharacter])
    const addGeneralCharacter = (character) => setCharacters([character,...characters])

    const deleteCharacter = (character) => setSelectedCharacter(selectedCharacter.filter(item => item.id !== character.id))
    const deleteGeneralCharacter = (character) =>{
    
            console.log(characters.filter(item => item.name !== character.name))
        setCharacters(characters.filter(item => item.name !== character.name))}
    
    return(
        <CharacterContext.Provider
        value={{
            characters,
            setCharacters,
            selectedCharacter,
            setSelectedCharacter,
            addCharacter,
            addGeneralCharacter,
            deleteCharacter,
            deleteGeneralCharacter
        }}
        >
            {children}
        </CharacterContext.Provider>

    )
}

export default CharacterState;