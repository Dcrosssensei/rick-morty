import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks"
import { useState, useEffect } from 'react';
import { Character } from '../../models/character';
import CharacterDetail from "./components/CharacterDetail";
import { unselect } from "../../redux/selectedSlide";

const Details = () => {

    const [character, setCharacter] = useState<Character | null>(null)
    const [fav, setFav] = useState<boolean>(false)
    const dispash = useAppDispatch();
    const selected = useAppSelector((state) => state.selected.selected)
    useEffect(() => {
        setCharacter(selected.character)
        setFav(selected.fav)
    }, [selected])
    
    const handleClose= ()=>{
      setCharacter(null)
      dispash(unselect())
    }
    

    return (
      <div className=" p-4 ">
        {
        character
            ? <CharacterDetail character={character} fav={fav} handleClose={handleClose} />
            : <div className="text-center "> <h1 className="text-3xl m-auto">Select a character to see details.</h1></div>

        }
        </div>
    )
  }
  
  export default Details