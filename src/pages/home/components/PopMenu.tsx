import { ReactNode } from 'react';

interface PopMenuProps {
  children: ReactNode;
}

const PopMenu = ({children}:PopMenuProps) => {
  return (
    <div className='
    fixed z-50 bg-white h-screen w-screen border border-gray-300 rounded-3xl 
    sm:top-28 sm:w-1/3 sm:h-fit sm:absolute
    '>
        {children}
    </div>
  )
}

export default PopMenu