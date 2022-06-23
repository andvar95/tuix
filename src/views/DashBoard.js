import React from "react";
import SelectedChar from "../components/SelectedChar";
import { useCharacter } from "../hooks/useCharacters";
import Characters from "../components/Characters";

const DashBoard = () =>{

    const { characters } = useCharacter();
    console.log(characters)
    return (
        <div className="general_container" >

        <div className="main_frame">
            <Characters character={characters} />
       
        </div>
       
       <div className="secondary_frame">
            <SelectedChar  />
        </div>
   

        </div>
    );

}

export default DashBoard;