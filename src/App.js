import React, { useState} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasketPage from "./components/BasketPage";
import MainPage from "./components/MainPage";
import ProductPage from "./components/ProductPage";
import BasketContext from "./contexts/BasketContext";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp/'
import FavoritesPage from './components/FavoritesPage/';
import HistoricPage from './components/HistoricPage';
import UserContext from './contexts/UserContext'
import UserProfile from './components/UserProfile';
import './style/reset.css'
import './style/style.css'

function App() {
    const [ basket, setBasket ] = useState([]);
    const [ products, setProducts ] = useState([]);
    const [ total, setTotal ] = useState(0);
    const [ category, setCategory ] = useState("smartphone");
    const [info,setInfo] = useState();

    return (
        <BasketContext.Provider value={{basket, setBasket, products, setProducts, total, setTotal, category, setCategory}}>            
            <UserContext.Provider value={{info,setInfo}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />}/>
                    <Route path="/product" element={<ProductPage />}/>
                    <Route path="/basket" element={<BasketPage />}/>
                    <Route path="/signin" element={<SignIn />}/>
                    <Route path="/signup" element={<SignUp />}/>
                    <Route path="/favorites" element={<FavoritesPage />} />
                    <Route path="/historic" element={<HistoricPage />} />
                    <Route path="/profile" element={<UserProfile />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
        </BasketContext.Provider>
    );
}

export default App;