import { useState } from "react";
import { genderOptions } from "../../../models/character";
import { ButtonStyleActive, ButtonStyleinactive } from "../styles/buttonStyle";
import { stateFilter } from "./Slide";

  interface ButtonsProps {
    onGender:(state:stateFilter)=> void;
  }

  
  const ButtonsGender = ({ onGender }:ButtonsProps) => {
        const [activeBnt, setActiveBnt] = useState('')

        const female = genderOptions.female;
        const male = genderOptions.male;
        const genderless = genderOptions.genderless;
        const unknown = genderOptions.unknown;
      return (
        <div>
          <button className={activeBnt === female ?ButtonStyleActive :  ButtonStyleinactive}
          onClick={()=> {
            onGender({status: female, origin:'gender'})
            setActiveBnt(female)
            }}>{female}</button>
          <button className={activeBnt === male ?ButtonStyleActive :  ButtonStyleinactive}
          onClick={()=> {
            onGender({status:male, origin:'gender'})
            setActiveBnt(male)
            }}>{male}</button>
          <button className={activeBnt === genderless ?ButtonStyleActive :  ButtonStyleinactive}
          onClick={()=> {
            onGender({status:genderless, origin:'gender'})
            setActiveBnt(genderless)
            }}>{genderless}</button>
          <button className={activeBnt === unknown ?ButtonStyleActive :  ButtonStyleinactive}
          onClick={()=> {
            onGender({status:unknown, origin:'gender'})
            setActiveBnt(unknown)
            }}>{unknown}</button>
        </div>
      );
    }
    
    export default ButtonsGender