import { ReactNode } from 'react';

interface PopMenuProps {
  children: ReactNode;
}

const PopMenu = ({children}:PopMenuProps) => {
  return (
    <div className='
    absolute z-50 bg-white h-full w-full border border-gray-300 rounded-3xl 
    sm:top-28 sm:w-1/3 sm:h-fit
    '>
        {children}
    </div>
  )
}

export default PopMenu