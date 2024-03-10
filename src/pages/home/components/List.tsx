import { useEffect, useState } from "react";
import Divider from "../../../components/Divider";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { addFavorite, removeFavorite } from "../../../redux/favoriteSlide";
import { Card, statusCard } from "./Card";
import LazyLoad from 'react-lazyload';
import { Character } from "../../../models/character";


const List = () => {
    const dispatch = useAppDispatch()
    const characters = useAppSelector((state) => state.characters.characters)
    // const favorites = useAppSelector((state)=> state.favorite.favorite)

    const [myFavorites, setMyFavorites] = useState<Character[]>([])
    const [characterList, setCharacterList] = useState<Character[]>([]);

    useEffect(() => {
        if (characters) {
            setCharacterList(characters)
        }
    }, [characters])




    const changeFavorite = (status: statusCard) => {
        const { prevStatus, id, character } = status;
        if (prevStatus) {
            dispatch(removeFavorite(id))
            const newFavs = myFavorites.filter(element => element.id !== character.id)
            setMyFavorites(newFavs)
        } else {
            dispatch(addFavorite(id))
            const characterFav = characterList.slice(id, 1)
            setMyFavorites(characterFav)
        }
    }

    return (
        <div className="w-full py-2">
            <h1>My Favorites</h1>
            {
                myFavorites.map((element, index) => {
                    return (
                        <Card key={index} character={element} idChat={index} handleFavorite={changeFavorite} favoriteProp={true} />
                    )
                })
            }

            <Divider />
            <h1>Characters</h1>
            <div className="">
                {
                    characters.map((element, index) => {
                        return (
                            <LazyLoad key={index} height={200} offset={100}>
                                <Card character={element} idChat={index} handleFavorite={changeFavorite} favoriteProp={false} />
                            </LazyLoad>
                        )
                    })
                }

            </div>

        </div>
    );
};

export default List;
