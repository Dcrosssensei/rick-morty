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
import { sortOptions } from "./ButtonsSort";

interface propList {
    filters: filterHandler,
    resetHandler: boolean;
    onChangeReset: (value: boolean) => void;
    searchText: string | null
}

const List = ({filters, resetHandler, onChangeReset, searchText }:propList) => {
    const {gender,sort,status}= filters;

    const dispatch = useAppDispatch()
    const charactersRedux = useAppSelector((state) => state.characters.characters)
    const favoritesRedux = useAppSelector((state) => state.favorites.favorite)
    const navigation = useNavigate();

    
    const [myFavorites, setMyFavorites] = useState<Character[]>([])
    const [characterList, setCharacterList] = useState<Character[]>([]);
    
    const [showFilters, setShowFilters] = useState(false)
    const [countFilter, setCountFilter] = useState<number>(0)
    const [myFavoritesFilter, setMyFavoritesFilter] = useState<Character[]>([])
    const [characterListFilter, setCharacterListFilter] = useState<Character[]>([]);

    useEffect(() => {
        if (charactersRedux && characterList.length <1) {
            setCharacterList(charactersRedux)
        }
    }, [charactersRedux])

    useEffect(() => {
        if (searchText) {
            const original = showFilters? [...characterListFilter] : [...charactersRedux];
            const filteredText = original.filter(objeto => objeto.name.toLowerCase().includes(searchText.toLowerCase()));
            const withoutFavorites = filteredText.filter((character) => {
                return !favoritesRedux.some((favorite) => favorite.id === character.id);
              });
              showFilters ? setCharacterListFilter(withoutFavorites) : setCharacterList(withoutFavorites)
        } else softRest()
    }, [searchText])

    useEffect(() => {
        let newFavs =myFavorites;
        let newList =characterList;
        let fConunter= 0;

        if ( gender || sort || status) {
            setShowFilters(true)
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
            if (sort) {
                if (sort === sortOptions.ASC) {
                    newFavs = newFavs.slice().sort((a, b) => a.name.localeCompare(b.name))
                    newList = newList.slice().sort((a, b) => a.name.localeCompare(b.name))
                }
                if (sort === sortOptions.DEC) {
                    newFavs = newFavs.slice().sort((a, b) => b.name.localeCompare(a.name))
                    newList = newList.slice().sort((a, b) => b.name.localeCompare(a.name))

                }
            } 
            setMyFavoritesFilter(newFavs)
            setCharacterListFilter(newList)
            setCountFilter(fConunter);
        }

    }, [gender,sort,status])

    useEffect(() => {
       if (resetHandler) resetOperation()
    }, [resetHandler])
    
   
    
    const resetOperation=()=>{
        softRest()
        setShowFilters(false)
        onChangeReset(false)
    }
    
    const softRest =()=>{        
        setMyFavorites(favoritesRedux)
        const tempList = [...charactersRedux]
        const withoutFavorites = tempList.filter((character) => {
            return !favoritesRedux.some((favorite) => favorite.id === character.id);
          });
        setCharacterList(withoutFavorites)
    }

   

    const changeFavorite = (status: statusCard) => {
        const { prevStatus, character } = status;
        if (prevStatus) {
            const newFavs = myFavorites.filter(element => element.id !== character.id)
            setMyFavorites(newFavs)
            const tempList =[...characterList, character];
            setCharacterList(tempList)
            dispatch(changeFav(false))
            dispatch(reduxFavorite(newFavs))

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
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigation(`${character.id}`)
    };

    return (
        <div className="w-full py-2">
            {
                showFilters
                ? <div className="flex justify-between items-center px-4 ">
                    <h5 className="text-[#2563EB] text-xl font-semibold">Results: {characterListFilter.length} </h5>
                    <h5 className=" bg-[#95dd7ae3] text-[#3B8520] rounded-full px-5 text-xl md:text-xl"> {countFilter} filter</h5>
                  </div>
                :null
            }
            <div>
                <h1 className="p-2" >My Favorites</h1>
                {
                    showFilters
                    ? myFavoritesFilter.map((element, index) => {
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
                        
                    : myFavorites.map((element, index) => {
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
            <h1 className="p-2">Characters</h1>
            <div >
                {showFilters
                ?   characterListFilter.map((element, index) => {
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
                :   characterList.map((element, index) => {
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
