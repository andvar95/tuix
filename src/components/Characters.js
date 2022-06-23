import React from "react";
import CharacterList from "./CharacterList";


const Characters = ({character}) =>{
    return(
        <div>
        
        <div className="selected_char_tittle">  Characters</div>
            <CharacterList data={character} />
        </div>
    );

}
export default Characters;