import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasketPage from "./components/BasketPage";
import MainPage from "./components/MainPage";
import ProductPage from "./components/ProductPage";
import BasketContext from "./contexts/BasketContext";

function App() {
    const [ basket, setBasket ] = useState([]);
    const [ products, setProducts ] = useState([]);


    return (
        <BasketContext.Provider value={{basket, setBasket, products, setProducts}}>            
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />}/>
                    <Route path="/product" element={<ProductPage />}/>
                    <Route path="/basket" element={<BasketPage />}/>
                </Routes>
            </BrowserRouter>
        </BasketContext.Provider>
    );
}

export default App;