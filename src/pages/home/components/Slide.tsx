import { SearchSlide } from "./SearchSlide"
import Divider from '../../../components/Divider';
import List from "./List";
import { useRef, useState } from "react";
import PopMenu from "./PopMenu";
import ButtonsSort from "./ButtonsSort";
import ButtonsStatus from "./ButtonsStatus";
import ButtonsGender from "./ButtonsGender";
import { ButtonStyleActive, ButtonStyleinactive } from "../styles/buttonStyle";

export interface stateFilter {
  origin: string
  status: string,

}

export interface filterHandler{
  gender: string | null,
  status: string | null,
  sort: string | null
}


function Slide() {
  
  const [showMenu, setShowMenu] = useState(false)
  const [resetHandler, setResetHandler] = useState(false)
  const [filterProps, setFilterProps] = useState<filterHandler>({
    gender: null,
    status:null,
    sort:null
    })
    const genderFilter = useRef<string | null>(null);
    const statusFilter = useRef<string | null>(null);
    const sortFilter = useRef<string | null>(null);
    const [searchText, setSearchText] = useState<string | null>(null)


    function recoverText (text:string){
      text !== "" ? setSearchText(text) : setSearchText(null)
    }

    const hanldeMenu= ()=>{
      setShowMenu(!showMenu)
      
    }

    const handlerFilters= (state:stateFilter)=>{
      const origin= state.origin;
      const status= state.status;

      switch (origin) {
        case 'gender':
          genderFilter.current= status
          break;
        case 'status':
          statusFilter.current= status
          break;
        case 'sort':
          sortFilter.current= status
          break;
        default:
          break;
      }
    }

    const filters = ()=>{
      setShowMenu(!showMenu)
      setFilterProps({
        gender: genderFilter.current ,
        status:statusFilter.current,
        sort:sortFilter.current
        })
    }

    const resetFilters = ()=>{
      setShowMenu(!showMenu)
      genderFilter.current = null;
      statusFilter.current= null;
      sortFilter.current= null;
      setFilterProps({
        gender: genderFilter.current ,
        status:statusFilter.current,
        sort:sortFilter.current
        })
        setResetHandler(true)
    }



  return (
    <>
    {showMenu
      ?
        <div>
          <PopMenu>
          <section className="p-3">
            <h1>FILTERS</h1>
          <Divider />
            <div>
              <h3>Sort</h3>
              <div className="flex">
                <ButtonsSort onSort={handlerFilters} />
              </div>
            </div>
            <Divider />
            <div>
              <h3>Status</h3>
              <ButtonsStatus  onStatus={handlerFilters}/>
            </div>
            <Divider />
            <div>
              <h3>Gender</h3>
              <ButtonsGender  onGender={handlerFilters}/>
            </div>
            <Divider />
            <button className={ButtonStyleActive} onClick={filters}> Filter </button>
            <button className={ButtonStyleinactive} onClick={resetFilters}> Reset </button>
          </section>
        </PopMenu>
      </div>
      :<></>
    }

    <div className={
      `absolute z-40 bg-white h-full w-full
      sm:w-2/3 md:w-1/3 sm:bg-gray-100 sm:relative
     
     `}
    >
      <div className="p-2">
        <h1 className=" w-full px-1 text-xl font-semibold break-all	py-4">Ryck and Morty List</h1>
        <SearchSlide onChange={recoverText} onIconClick={hanldeMenu} /> 
      </div>
        <List filters={filterProps} resetHandler={resetHandler} onChangeReset={setResetHandler} searchText={searchText}/>
    </div>
    </>

  )
}

export default Slide