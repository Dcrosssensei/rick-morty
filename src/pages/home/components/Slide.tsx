import { SearchSlide } from "./SearchSlide"
import Divider from '../../../components/Divider';
import List from "./List";

function Slide() {

    function recoverText (e:string){
        console.log('e', e)
    }

    // bg-gray-300 sm:w-96  sm:h-screen sm:flex sm:flex-col sm:grupo
  return (
    <div className={
      `absolute z-50 bg-gray-300 h-full w-full
      sm:w-1/3

     
     
     `}
    >
      <div className="p-2">
        <h1 className=" w-full px-1 text-xl font-semibold break-all	py-4">Ryck and Morty List</h1>
        <SearchSlide onChange={recoverText} /> 
      </div>
        <Divider />
        <List />
    </div>
  )
}

export default Slide