import Divider from "../../../components/Divider";
import { selectForm } from "../../../redux/selectedSlide";
import { TitleStyle, boxStyle, mainStyle, tagStyle } from "./styles/interfaceStyle";
import { HeartIcon, XCircleIcon  } from '@heroicons/react/24/solid'
import { HeartIcon as HearOutline } from '@heroicons/react/24/outline'

interface detailsProp extends selectForm {
  handleClose: ()=> void
}

const CharacterDetail = ({ character, fav, handleClose }:detailsProp) => {

  return (
    <>
     <button
      onClick={handleClose}
      className=" absolute right-8  top-8 flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
    >
      <XCircleIcon className="w-20 h-20 text-gray-600" />
    </button>
    {
       character? 
        <div className="flex flex-col items-center w-full">
            <div className="flex flex-col gap-4 items-center relative">
                <h1 className={TitleStyle}>{character.name}</h1>
                <img src={character.image} alt={character.name} className="w-72 h-auto rounded-3xl " />
                {
                fav
                ? <div className="bg-white rounded-full w-20 h-20 absolute -bottom-3 flex items-center justify-center -right-10 border-opacity-15 border-4 border-green-500 ">
                    <HeartIcon className="w-12 h-12   text-green-500" />
                  </div>
                : <div className="bg-white rounded-full w-20 h-20 absolute -bottom-3 flex items-center justify-center -right-10 border-opacity-15 border-4 border-green-500 ">
                    <HearOutline className="w-12 h-12 text-green-500" />
                  </div>
                }
            </div>
            <Divider />
            <div className="flex flex-col">
                <div className={boxStyle}>
                    <p className={tagStyle}>Status: </p>
                    <h1 className={mainStyle}> {character.status}</h1>
                </div>
                <div className={boxStyle}>
                    <p className={tagStyle}>Specie: </p>
                    <h1 className={mainStyle}>  {character.species}</h1>
                </div>
                <div className={boxStyle}>
                    <p className={tagStyle}>Gender: </p>
                    <h1 className={mainStyle}>  {character.gender}</h1>
                </div>
                <div className={boxStyle}>
                    <p className={tagStyle}>Type: </p>
                    <h1 className={mainStyle}>  {character.type}</h1>
                </div>
           </div>
        </div>
        :null
    }

    </>
  );
}

export default CharacterDetail;
