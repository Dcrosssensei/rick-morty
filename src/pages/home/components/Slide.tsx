import { SearchSlide } from "./SearchSlide"
import Divider from '../../../components/Divider';
import List from "./List";
import { useState } from "react";
import PopMenu from "./PopMenu";
import ButtonsSort from "./ButtonsSort";
import ButtonsStatus from "./ButtonsStatus";
import ButtonsGender from "./ButtonsGender";
import { ButtonStyleActive, ButtonStyleinactive } from "../styles/buttonStyle";

function Slide() {

  const [showMenu, setShowMenu] = useState(false)

    function recoverText (e:string){
        console.log('e', e)
    }

    const hanldeMenu= ()=>{
      setShowMenu(!showMenu)
      
    }



  return (
    <>
    {showMenu
      ?<PopMenu>
      <section className="p-3">
        <h1>FILTERS</h1>
      <Divider />
        <div>
          <h3>Sort</h3>
          <div className="flex">
            <ButtonsSort onSort={(sort)=>{console.log('sort', sort)}} />
          </div>
        </div>
        <Divider />
        <div>
          <h3>Status</h3>
          <ButtonsStatus  onStatus={(status)=>{console.log('status', status)}}/>
        </div>
        <Divider />
        <div>
          <h3>Gender</h3>
          <ButtonsGender  onGender={(gender)=>{console.log('status', gender)}}/>
        </div>
        <Divider />
        <button className={ButtonStyleActive}> Filter </button>
        <button className={ButtonStyleinactive}> Reset </button>
      </section>
    </PopMenu>
      :<></>
    }

    <div className={
      `absolute z-40 bg-white h-full w-full
      sm:w-1/3 sm:bg-gray-100 sm:relative
     
     `}
    >
      <div className="p-2">
        <h1 className=" w-full px-1 text-xl font-semibold break-all	py-4">Ryck and Morty List</h1>
        <SearchSlide onChange={recoverText} onIconClick={hanldeMenu} /> 
      </div>
        <List />
    </div>
    </>

  )
}

export default Slide