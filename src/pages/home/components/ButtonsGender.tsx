import { useState } from "react";
import { genderOptions } from "../../../models/character";
import { ButtonStyleActive, ButtonStyleinactive } from "../styles/buttonStyle";

  interface ButtonsProps {
    onGender:(sort:string)=> void;
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
            onGender(female)
            setActiveBnt(female)
            }}>{female}</button>
          <button className={activeBnt === male ?ButtonStyleActive :  ButtonStyleinactive}
          onClick={()=> {
            onGender(male)
            setActiveBnt(male)
            }}>{male}</button>
          <button className={activeBnt === genderless ?ButtonStyleActive :  ButtonStyleinactive}
          onClick={()=> {
            onGender(genderless)
            setActiveBnt(genderless)
            }}>{genderless}</button>
          <button className={activeBnt === unknown ?ButtonStyleActive :  ButtonStyleinactive}
          onClick={()=> {
            onGender(unknown)
            setActiveBnt(unknown)
            }}>{unknown}</button>
        </div>
      );
    }
    
    export default ButtonsGender