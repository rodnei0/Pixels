import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import ProductPage from "./components/ProductPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />}/>
                <Route path="/product" element={<ProductPage />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;