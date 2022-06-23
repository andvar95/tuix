import React from "react";
import { useCharacter } from "../hooks/useCharacters";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus,faUserXmark } from '@fortawesome/free-solid-svg-icons'



const CharacterCard = ({character,troops=0,selected}) =>{

    const { addCharacter,deleteGeneralCharacter,addGeneralCharacter,deleteCharacter  } = useCharacter();

    const handleAddCharacter = () =>{
        addCharacter(character)
        deleteGeneralCharacter(character)
    }
    const handleDeleteCharacter = ()  =>{
        addGeneralCharacter(character)
        deleteCharacter(character)

    }

    return (
    <div className="card_container">
        <img src={character.img} alt="cat-img" />
        <div className="card_body">
            <div className="card_text">{character.name}</div>
            <div className="card_buttons" >
                {selected? <div className="add" onClick={()=> handleDeleteCharacter()}><FontAwesomeIcon icon={faUserXmark} /></div>:
                <div className="del" onClick={()=> handleAddCharacter()}><FontAwesomeIcon icon={faUserPlus} /></div>}
            </div>
         </div>
        {selected? <div className="circle">{troops}</div>:null}
        
    </div>
        );
}

export default CharacterCard;