import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './Components/Cart/Cart';
import CartProvider from './Context/CartContext';
import Form from './Components/Form/Form';

const App = () => {

  const oferta = "25%"

  return(
    <>
    <BrowserRouter>
      <CartProvider>
        <Header/>
        <Routes>
            <Route path='/' element={ <ItemListContainer oferta={oferta} />}/>
            <Route path='/seccion/:seccionId' element={ <ItemListContainer oferta={oferta} />}/>
            <Route path='/producto/:productId' element={ <ItemDetailContainer />}/>
            <Route path='/cart' element={ <Cart/> }/>
            <Route path='/form' element={ <Form/> }/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
    </>
  )
}

export default App;

