import { Bottom, ProductsContainer, Categories, Title, SearchBox, Top, Container, MainContainer } from "./styles"
import Products from "./Products";
import { useState } from "react";

function Main() {
    const [ category, setCategory ] = useState("smartphone");

    return (
        <MainContainer>

        <Container>
            <Top>
                <ion-icon name="menu-outline"></ion-icon>
                <SearchBox><ion-icon name="search-outline"></ion-icon></SearchBox>
            </Top>
            <Title>
                Compre online 
                retire na loja
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
            <Bottom>
                <ion-icon name="home-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
                <ion-icon name="cart-outline"></ion-icon>
            </Bottom>
        </Container>
        </MainContainer>
    );
}

export default Main;