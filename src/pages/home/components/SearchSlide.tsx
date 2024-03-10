import { AdjustmentsVerticalIcon } from "@heroicons/react/24/solid"
import SearchInput, { SearchInputProps } from "../../../components/SearchInput"

interface SearchslideProps extends SearchInputProps {
    buttonState?: string
    onIconClick?: () => void;
}

export const SearchSlide = ({onChange, placeHolder, onIconClick}: SearchslideProps) => {
  return (
    <div className="flex w-full bg-white items-center">
        <SearchInput 
            onChange={onChange}
            placeHolder={placeHolder}
        /> 
        <AdjustmentsVerticalIcon 
          className="w-7 h-7 cursor-pointer text-gray-600 hover:text-violet-900 hover:cursor-pointer" 
          onClick={onIconClick} 
        />
    </div>
  )
}
