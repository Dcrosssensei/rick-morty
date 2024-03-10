import { gql } from "@apollo/client";

export const characterModels = ` results {
    id
    name
    status
    species
    type
    gender
    image
  }
  `


export const INITIAL_QUERY = gql` query {
    characters(page:1) {
      ${characterModels}
    }
  }
  `

  export const buildBigQuery =()=>{

    let result = `query {`

    for (let index = 1; index <= 42; index++) {
        result+=`page${index}: characters (page:${index}) {${characterModels}}`
    }
    
    result+= '}'
    return result;

  }
  
//   export const charactersNext =(page:string | null)=>{
//     let result

//     if (page){
//         const pageInt = parseInt(page);
//         result = gql` query {
//             characters (page: ${pageInt}) {
//               info {
//                 pages
//                 next
//                 prev
//               }
//               results {
//                 id
//                 name
//                 status
//                 species
//                 type
//                 gender
//                 image
//               }
//             }
//           }
//           `
//     }
//     return result;

//   }
  