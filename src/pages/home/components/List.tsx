import { useEffect, useState } from "react";
import Divider from "../../../components/Divider";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { selected } from "../../../redux/selectedSlide";
import { Card, statusCard } from "./Card";
import LazyLoad from 'react-lazyload';
import { Character } from "../../../models/character";


const List = () => {
    const dispatch = useAppDispatch()
    const characters = useAppSelector((state) => state.characters.characters)

    const [myFavorites, setMyFavorites] = useState<Character[]>([])
    const [characterList, setCharacterList] = useState<Character[]>([]);

    useEffect(() => {
        if (characters) {
            setCharacterList(characters)
        }
    }, [characters])




    const changeFavorite = (status: statusCard) => {
        const { prevStatus, character } = status;
        if (prevStatus) {
            const newFavs = myFavorites.filter(element => element.id !== character.id)
            setMyFavorites(newFavs)
            const tempList =characterList;
            tempList.splice(0 , 0, character)
            setCharacterList(tempList)

        } else {
            const newList = characterList.filter(element => element.id !== character.id)
            const addFav: Character[] = [...myFavorites, character]
            setMyFavorites(addFav)
            setCharacterList(newList)
        }
    };

    const seletedCard = (status: statusCard) => {
        dispatch(selected({ character: status.character, fav: status.prevStatus}))
    };

    return (
        <div className="w-full py-2">
            <div className="flex justify-between items-center px-4 ">
                <h5 className="text-[#2563EB] text-xl font-semibold">Results: {characterList.length} </h5>
                <h5 className=" bg-[#95dd7ae3] text-[#3B8520] rounded-full px-5 text-xl">1 filter</h5>
            </div>
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
