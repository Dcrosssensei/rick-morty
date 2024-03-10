import { gql, useLazyQuery } from "@apollo/client";
import Slide from "./components/Slide";
import { buildBigQuery } from '../../services/graphql/chractersQuery';
import { Character } from '../../models/character';
import { useEffect, useState } from "react";
import { useAppDispatch, 
    useAppSelector 
} from "../../hooks/reduxHooks";
import { addCharacters } from "../../redux/charactersSlide";
import { Outlet } from "react-router-dom";

const Home = () =>{

    const [process, setProcess] =useState(false)
    const query = buildBigQuery();
    const bigQuery= gql`${query}`
    const [getCharacters, result] = useLazyQuery(gql`query ${bigQuery}`)
    const dispatch = useAppDispatch();
    const selected = useAppSelector((state) => state.selected.selected)

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
      });
    
      useEffect(() => {
        const handleResize = () => {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
          });
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
      

    useEffect(() => {
        if (process) {
            let dataMapped:Character[]=[];
            const {data} = result;
            console.log('data', data)
            for (const page in data){
                dataMapped= dataMapped.concat(data[page].results)
            }
            if (dataMapped.length >0) {
                localStorage.setItem('characters', JSON.stringify(dataMapped))
            }
        }
    }, [process, result])
    

    const getAllcharacters=()=>{
        const charactersLocal = localStorage.getItem('characters')
        if (!charactersLocal && !process) {
            getCharacters();
            setProcess(true);
        } else if (charactersLocal){  
            const characters = JSON.parse(charactersLocal)    
            dispatch(addCharacters(characters))
        }
    }

    getAllcharacters()

  return (
    <div className="flex h-full w-full">
        {   
            windowSize.width < 641 && selected.character
            ? null
            : <Slide />
        }
        <div className="  md:w-2/3 w-full relative ">
        <Outlet />
        </div>
    </div>
  )
}

export default Home;