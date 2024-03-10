import { useState } from "react";
import { statusOptions } from "../../../models/character";
import { ButtonStyleActive, ButtonStyleinactive } from "../styles/buttonStyle";
import { stateFilter } from "./Slide";

  interface ButtonsProps {
    onStatus:(state:stateFilter)=> void;
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
            onStatus({status:alive, origin:'status'}) 
            setActiveBnt(alive)
        }}>{alive}</button>
          <button className={activeBnt === dead ?ButtonStyleActive :  ButtonStyleinactive}
          onClick={() => { 
            onStatus({status:dead, origin:'status'}) 
            setActiveBnt(dead)
        }}>{dead}</button>
          <button className={activeBnt === unknown ?ButtonStyleActive :  ButtonStyleinactive}
          onClick={() => { 
            onStatus({status:unknown, origin:'status'}) 
            setActiveBnt(unknown)
        }}>{unknown}</button>
        </div>
      );
    }
    
    export default ButtonsStatus