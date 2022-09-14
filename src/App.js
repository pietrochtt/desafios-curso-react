import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';


const App = () => {

  const oferta = "25%"

  return(
    <>
    <Header/>
    <ItemListContainer oferta={oferta}/>
    </>
  )
}

export default App;

