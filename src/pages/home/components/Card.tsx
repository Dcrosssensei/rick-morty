
import { HeartIcon } from '@heroicons/react/24/solid'
import { HeartIcon as HearOutline } from '@heroicons/react/24/outline'
import { Character } from '../../../models/character';
// import { useEffect, useState } from 'react';

export interface statusCard {
  prevStatus: boolean,
  character: Character
}

interface cardProps {
  character:Character,
  handleFavorite: (status: statusCard)=> void
  handleSelected: (status: statusCard)=> void
  favoriteProp: boolean,
}

export const Card = ({character, handleFavorite, handleSelected, favoriteProp}:cardProps) => {

  const handleClickFavorite = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    favoriteProp 
      ?  handleFavorite({prevStatus: true, character}) 
      : handleFavorite({prevStatus: false, character});
};
  const handleClickCard = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    favoriteProp 
    ?  handleSelected({prevStatus: true, character}) 
    : handleSelected({prevStatus: false, character});
};

  return (
      <section 
      onClick={handleClickCard}
      className='
        bg-white h-24 p-3 hover:bg-violet-100 
          sm:hover:bg-white
      '>
        <div className="flex w-full h-full items-center">
          <div className=' flex w-4/5 gap-4 items-center cursor-pointer'>
            <img className='rounded-full w-10 h-10' src={character.image} alt=""  />
            <div className='flex flex-col'>
              <h2 className=' w-full px-1 text-xl font-semibold break-words	 '> {character.name}</h2>
              <h3 className=' w-full px-1 text-base font-light break-words	 '> {character.status}</h3>
            </div>
          </div>
          <div 
            className=' flex w-1/5 h-full rounded-full items-center justify-center cursor-pointer'
            onClick={handleClickFavorite}
          >
            {
              favoriteProp
              ? <HeartIcon className="w-7 h-7 text-green-500" />
              : <HearOutline className="w-7 h-7 text-green-500" />
            }

          </div>
        </div>
      </section>   
  )
}


// card
    // -color react if is active in destok