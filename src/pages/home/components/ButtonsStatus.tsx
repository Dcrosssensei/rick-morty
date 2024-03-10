import { useState } from "react";
import { statusOptions } from "../../../models/character";
import { ButtonStyleActive, ButtonStyleinactive } from "../styles/buttonStyle";

  interface ButtonsProps {
    onStatus:(sort:string)=> void;
  }

  const ButtonsStatus = ({ onStatus }:ButtonsProps) => {
    const [activeBnt, setActiveBnt] = useState('')
  
        const alive = statusOptions.alive;
        const dead = statusOptions.dead;
        const unknown  = statusOptions.unknown;
      return (
        <div>
          <button className={activeBnt === alive ?ButtonStyleActive :  ButtonStyleinactive}
          onClick={() => { 
            onStatus(alive) 
            setActiveBnt(alive)
        }}>{alive}</button>
          <button className={activeBnt === dead ?ButtonStyleActive :  ButtonStyleinactive}
          onClick={() => { 
            onStatus(dead) 
            setActiveBnt(dead)
        }}>{dead}</button>
          <button className={activeBnt === unknown ?ButtonStyleActive :  ButtonStyleinactive}
          onClick={() => { 
            onStatus(unknown) 
            setActiveBnt(unknown)
        }}>{unknown}</button>
        </div>
      );
    }
    
    export default ButtonsStatus