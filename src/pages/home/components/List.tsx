import Divider from "../../../components/Divider";
import { Card } from "./Card";


const List = () => {

    // favoritos
    // characters

    const rick = { 
    id: "1",
    name: "Rick Sanchez",
    status: 'Alive',
    species: "Human",
    type: "",
    gender: "Male",
    image:"https://rickandmortyapi.com/api/character/avatar/1.jpeg" }

    const changeFavorite = (status:boolean)=>{ console.log('status', status)}
  return (
    <div className="w-full py-2">
    <h1>My Favorites</h1>
    <Card character={rick} handleFavorite={changeFavorite} />
    {/* {favorites.map(element:Character, index:int)=>{
        <Card key={index} chracter={element} />
    }} */}
    <Divider />
    <h1>others</h1>
    {/* {characters.map(element:Character, index:int)=>{
            <Card key={index} chracter={element} />
    }} */}
        lista
    </div>
  );
};

export default List;
