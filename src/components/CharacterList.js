import React from "react";
import CharacterCard from "./CharacterCard";




const CharacterList = ({data,troops=[],selected=false}) =>{
    console.log(data)
    return (
    <div className="flex">
        {
            data.map((character,index) =>(
                <div>
                    <CharacterCard character={character} selected={selected} troops={troops[index]} />              
                </div>
            ))
        }
    </div>
        );
}

export default CharacterList;