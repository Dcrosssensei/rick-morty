import { useEffect, useState } from "react";
import Divider from "../../../components/Divider";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { changeFav, selected } from "../../../redux/selectedSlide";
import { Card, statusCard } from "./Card";
import LazyLoad from 'react-lazyload';
import { Character } from "../../../models/character";
import { useNavigate } from "react-router";
import { filterHandler } from "./Slide";
import { reduxFavorite } from "../../../redux/favoritesSlide";

interface propList {
    filters: filterHandler,
    resetHandler: boolean;
    onChangeReset: (value: boolean) => void;

}

const List = ({filters, resetHandler, onChangeReset }:propList) => {
    const {gender,sort,status}= filters;

    const dispatch = useAppDispatch()
    const charactersRedux = useAppSelector((state) => state.characters.characters)
    const favoritesRedux = useAppSelector((state) => state.favorites.favorite)
    const navigation = useNavigate();

    const [showFilters, setShowFilters] = useState(false)
    const [countFilter, setCountFilter] = useState<number>(0)
    const [myFavorites, setMyFavorites] = useState<Character[]>([])
    const [characterList, setCharacterList] = useState<Character[]>([]);

    useEffect(() => {
        console.log('charactersRedux')
        if (charactersRedux && characterList.length <1) {
            setCharacterList(charactersRedux)
        }
    }, [charactersRedux])

    useEffect(() => {
        console.log('filters');
        
        if ( gender || sort || status ) {
            let newFavs =myFavorites;
            let newList =characterList;

            setShowFilters(true)
            let fConunter= 0;
            if (gender){
                fConunter++
                newFavs = newFavs.filter(element => element.gender == gender)
                newList = newList.filter(element => element.gender == gender)
            }
            if (status) {
                fConunter++
                newFavs = newFavs.filter(element => element.status == status)
                newList = newList.filter(element => element.status == status)
            } 
            setMyFavorites(newFavs)
            setCharacterList(newList)
            setCountFilter(fConunter);
        }
    }, [gender,sort,status])
    
    useEffect(() => {
        console.log('reset');
        
       if (resetHandler) {
        setMyFavorites(favoritesRedux)
        const withoutFavorites = charactersRedux.filter((character) => {
            return !favoritesRedux.some((favorite) => favorite.id === character.id);
          });
        setCharacterList(withoutFavorites)
        setShowFilters(false)
        onChangeReset(false)
       }
    }, [resetHandler])
    


    const changeFavorite = (status: statusCard) => {
        const { prevStatus, character } = status;
        if (prevStatus) {
            const newFavs = myFavorites.filter(element => element.id !== character.id)
            setMyFavorites(newFavs)
            const tempList =[...characterList, character];
            setCharacterList(tempList)
            dispatch(changeFav(false))

        } else {
            const newList = characterList.filter(element => element.id !== character.id)
            const addFav: Character[] = [...myFavorites, character]
            setMyFavorites(addFav)
            setCharacterList(newList)
            dispatch(changeFav(true))
            dispatch(reduxFavorite(addFav))
        }
    };

    const seletedCard = (status: statusCard) => {
        const {character, prevStatus} = status;
        dispatch(selected({ character: character, fav: prevStatus}))
        navigation(`${character.id}`)
    };

    return (
        <div className="w-full py-2">
            {
                showFilters
                ? <div className="flex justify-between items-center px-4 ">
                    <h5 className="text-[#2563EB] text-xl font-semibold">Results: {characterList.length} </h5>
                    <h5 className=" bg-[#95dd7ae3] text-[#3B8520] rounded-full px-5 text-xl md:text-xl"> {countFilter} filter</h5>
                  </div>
                :null
            }
            <div className="p-2 ">
                <h1>My Favorites</h1>
                {
                    myFavorites.map((element, index) => {
                        return (
                            <Card 
                                key={index} 
                                character={element} 
                                handleFavorite={changeFavorite} 
                                favoriteProp={true} 
                                handleSelected={seletedCard}
                                />
                        )
                    })
                }
            </div>
            <Divider />
            <h1>Characters</h1>
            <div className="">
                {
                    characterList.map((element, index) => {
                        return (
                            <LazyLoad key={index} height={200} offset={100}>
                                <Card 
                                    character={element} 
                                    handleFavorite={changeFavorite} 
                                    favoriteProp={false} 
                                    handleSelected={seletedCard}
                                />
                            </LazyLoad>
                        )
                    })
                }

            </div>

        </div>
    );
};

export default List;
