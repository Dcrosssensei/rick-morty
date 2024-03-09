
import { HeartIcon } from '@heroicons/react/24/solid'
import { HeartIcon as HearOutline } from '@heroicons/react/24/outline'
import { Character } from '../../../models/character';
import { useEffect, useState } from 'react';

interface cardProps {
  character:Character,
  handleFavorite: (status:boolean)=> void
}

export const Card = ({character, handleFavorite}:cardProps) => {
  const {id} = character;
  const reduxList= ["1"]

  const [favorite, setFavorite] = useState(false);
  useEffect(() => {
    if (reduxList.includes(id)) setFavorite(true)
    else setFavorite(false);
  
  }, [id, reduxList])
  
  const handleClickFavorite = () => {
    favorite ?  handleFavorite(true) : handleFavorite(false);
    setFavorite(!favorite)
};

  return (
    <>
        <section className='
          bg-white h-24 p-3 hover:bg-violet-100 
            sm:hover:bg-white
        '>
          <div className="flex w-full h-full items-center">
            <div className=' flex w-4/5 gap-4 items-center'>
              <img className='rounded-full w-10 h-10' src={character.image} alt=""  />
              <div className='flex flex-col'>
                <h2 className=' w-full px-1 text-xl font-semibold break-words	 '> {character.name}</h2>
                <h3 className=' w-full px-1 text-base font-light break-words	 '> {character.status}</h3>
              </div>
            </div>
            <div 
              className=' flex w-1/5 h-full items-center justify-center'
              onClick={handleClickFavorite}
            >
              {
                favorite
                ? <HeartIcon className="w-7 h-7 text-green-500" />
                : <HearOutline className="w-7 h-7 text-green-500" />
              }

            </div>
          </div>
        </section>   
    </>
  )
}


// card
    // -color react if is active in destok