import React, { useState } from "react";
import { useCharacter } from "../hooks/useCharacters";
import CharacterList from "./CharacterList";
import { handleTroops } from "../helpers/handleTroops";
import ErrorCard from "./ErrorCard";




const SelectedChar = () =>{
    const { selectedCharacter  } = useCharacter();
    const [error, setError] = useState(false)
    const [totalTroops, setTotalTroops] = useState(0);
    const [ arrTroops, setArrTroops] = useState([]);

    const calculateTroops = () =>{
        if(selectedCharacter.length === 0){
            setTimeout(()=>{
                setError(false)
            },5000)
            setError(true)
        }
        else{
       const arr_number =  handleTroops(selectedCharacter.length, totalTroops)
       setArrTroops(arr_number)
    }
    }

    const handleInput = (e) => {
        setTotalTroops(e.target.value)
    }

    return (
    <div className="selected_container">
        
        
     
          <div className="selected_char_tittle">  Selected Characters</div>

          <div className="input-troops">
                    <input min={0} type="number" onChange={handleInput} />
                    <button onClick={calculateTroops}> Calculate</button>
                  
            </div>
            

          <div className="selected_char">
            <CharacterList data={selectedCharacter} troops={arrTroops} selected={true} />
             {error?<ErrorCard message={"You must  agreggate at least One Character"} />:null}
        </div> 

    </div>
        );
}

export default SelectedChar;