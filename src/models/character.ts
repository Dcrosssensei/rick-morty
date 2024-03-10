
export interface Origin {
    name: string;
    url: string;
  }
  
  export interface Location {
    name: string;
    url: string;
  }
  
  export interface Character {
    id: string;
    name: string;
    status: string;
    species: string;
    type: string;
    gender:string;
    image: string;
  }
  
  export const statusOptions = {
    alive: 'Alive',
    dead: 'Dead',
    unknown: 'unknown'
  }

  export const genderOptions = {
    female: 'Female',
    male: 'Male',
    genderless: 'Genderless',
    unknown: 'unknown'
  }



 export const LOCAL_STORAGE = 'characters'