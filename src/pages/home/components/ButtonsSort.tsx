import { useState } from "react";
import { ButtonStyleActive, ButtonStyleinactive } from "../styles/buttonStyle";

interface ButtonsProps {
    onSort: (sort: string) => void;
}

const ButtonsSort = ({ onSort }: ButtonsProps) => {
    const sortOptions= {
        ASC: 'ASC',
        DEC: 'DEC'
    }
    const [activeBnt, setActiveBnt] = useState('')

    return (
        <div>
            <button className={activeBnt === sortOptions.ASC ?ButtonStyleActive :  ButtonStyleinactive}
                onClick={() => { 
                    onSort(sortOptions.ASC) 
                    setActiveBnt(sortOptions.ASC)
                }}>
                Sort A-Z
            </button>
            <button className={activeBnt === sortOptions.DEC ?ButtonStyleActive :  ButtonStyleinactive}
             onClick={() => { 
                onSort(sortOptions.DEC ) 
                setActiveBnt(sortOptions.DEC )
            }}>
                Sort Z-A
            </button>
        </div>
    );
}

export default ButtonsSort