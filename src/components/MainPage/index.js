import { Bottom, ProductsContainer, Categories, Title, SearchBox, Top, Container, MainContainer } from "./styles"
import Products from "./Products";

function Main() {
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
                <span>Smartphones</span>
                <span>Notebooks</span>
                <span>Fones</span>
                <span>Periféricos</span>
            </Categories>
            <ProductsContainer>

                <Products></Products>

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
