import { useState } from "react";
import { ButtonStyleActive, ButtonStyleinactive } from "../styles/buttonStyle";
import { stateFilter } from "./Slide";

interface ButtonsProps {
    onSort: (state: stateFilter) => void;
}

export const sortOptions= {
    ASC: 'ASC',
    DEC: 'DEC'
}

const ButtonsSort = ({ onSort }: ButtonsProps) => {
    const [activeBnt, setActiveBnt] = useState('')

    return (
        <div>
            <button className={activeBnt === sortOptions.ASC ?ButtonStyleActive :  ButtonStyleinactive}
                onClick={() => { 
                    onSort({status:sortOptions.ASC, origin:'sort'}) 
                    setActiveBnt(sortOptions.ASC)
                }}>
                Sort A-Z
            </button>
            <button className={activeBnt === sortOptions.DEC ?ButtonStyleActive :  ButtonStyleinactive}
             onClick={() => { 
                onSort({status:sortOptions.DEC, origin:'sort'} ) 
                setActiveBnt(sortOptions.DEC )
            }}>
                Sort Z-A
            </button>
        </div>
    );
}

export default ButtonsSort