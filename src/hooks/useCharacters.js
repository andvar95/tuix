import { useContext } from "react";
import CharacterContext from "../context/CharacterContext"



export const useCharacter = () =>{
    const context = useContext(CharacterContext)     // crea un contexto el cual contiene todo lo que se ha creado en UserState
    return { ...context}

}