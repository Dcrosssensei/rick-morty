import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'
import { RouterProvider } from "react-router-dom";
import routes from './routes/routes'
import { Provider } from 'react-redux';
import { store } from './redux/store';

const URL= import.meta.env.VITE_URL_API;
const apollo = new ApolloClient({
  link: new HttpLink({
    uri: URL
  }),
  cache:new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store} >
      <ApolloProvider client={apollo}>
        <RouterProvider router={routes } />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
)
