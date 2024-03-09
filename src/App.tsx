// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { gql, useQuery } from '@apollo/client'
function App() {
  // const [count, setCount] = useState(0)

  const characters = gql` query {
    characters {
      info {
        pages
        next
        prev
      }
      results {
        id
        name
      }
    }
  }
  `
  const result = useQuery(characters)
  console.log('result', result)
  
  return (
      <div className="bg-red-600">
          <h1 className="text-9xl font-bold overline">Vite + React</h1>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
  )
}

export default App
