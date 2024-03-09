import SearchInput, { SearchInputProps } from "../../../components/SearchInput"

interface SearchslideProps extends SearchInputProps {
    buttonState?: string
}

export const SearchSlide = ({onChange, placeHolder, buttonState}: SearchslideProps) => {
  return (
    <div className="w-full bg-red-500">
        <SearchInput 
            onChange={onChange}
            placeHolder={placeHolder}
        /> 
        {buttonState}
    </div>
  )
}
