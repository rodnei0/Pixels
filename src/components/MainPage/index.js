import { Bottom, ProductsContainer, Categories, Title, SearchBox, Top, Container, MainContainer } from "./styles"
import Products from "./Products";
import { useContext } from "react";
import BasketContext from "../../contexts/BasketContext";
import { useNavigate } from "react-router-dom";

function MainPage() {
    const { basket, category, setCategory } = useContext(BasketContext);
    const navigate = useNavigate();

    return (
        <MainContainer>
            <Top>
                <ion-icon name="menu-outline"></ion-icon>
                <SearchBox><ion-icon name="search-outline"></ion-icon></SearchBox>
            </Top>
            <Container>
                <Title>
                    Compre online retire na loja
                </Title>
                <Categories>
                    <button onClick={() => {setCategory("smartphone")}}>Smartphones</button>
                    <button onClick={() => {setCategory("notebook")}}>Notebooks</button>
                    <button onClick={() => {setCategory("fone")}}>Fones</button>
                    <button onClick={() => {setCategory("periferico")}}>Periféricos</button>
                </Categories>
                <ProductsContainer>
                    <Products category={category}></Products>
                </ProductsContainer>
            </Container>
            <Bottom>
                <ion-icon name="home-outline"></ion-icon>
                <ion-icon name="heart-outline" onCLick={()=>navigate("/favorites")}></ion-icon>
                <ion-icon name="person-outline" onClick={()=>navigate('/profile')}></ion-icon>
                <div onClick={() => navigate("/basket")}>
                    <ion-icon name="cart-outline"></ion-icon>
                    <div>{basket.length}</div>
                </div>
            </Bottom>
        </MainContainer>
    );
}

export default MainPage;