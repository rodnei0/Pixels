import styled from "styled-components";

function Products() {
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
                <Product>
                    <ProductPicture>
                        <img src="https://files.tecnoblog.net/wp-content/uploads/2021/09/iphone-13-produto-2-700x700.png" alt="iphone"></img>
                    </ProductPicture>
                    <ProductDescription>
                        iPhone 13
                        <p>Tela de 6.1"</p>
                        <div>R$ 7.599</div>
                    </ProductDescription>
                </Product>
                <Product>
                    <ProductPicture>
                        <img src="https://files.tecnoblog.net/wp-content/uploads/2021/09/iphone-13-produto-2-700x700.png" alt="iphone"></img>
                    </ProductPicture>
                    <ProductDescription>
                        iPhone 13
                        <p>Tela de 6.1"</p>
                        <div>R$ 7.599</div>
                    </ProductDescription>
                </Product>
                <Product>
                    <ProductPicture>
                        <img src="https://files.tecnoblog.net/wp-content/uploads/2021/09/iphone-13-produto-2-700x700.png" alt="iphone"></img>
                    </ProductPicture>
                    <ProductDescription>
                        iPhone 13
                        <p>Tela de 6.1"</p>
                        <div>R$ 7.599</div>
                    </ProductDescription>
                </Product>
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

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;     
    justify-content: center;
    align-items: center;

    min-height: 100vh;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 39px;

    width: 375px;
    min-height: 100vh;
`;

const Top = styled.div`
    display: flex;
    margin-right: auto;

    ion-icon {
        font-size: 50px;
    }
`;

const SearchBox = styled.div`
    display: flex;
    align-items: center;

    width: 237px;
    height: 50px;
    padding-left: 10px;
    margin-left: 10px;

    border: 2px solid #C9C9C9;
    border-radius: 30px;

    ion-icon {
        font-size: 20px;
    }
`;

const Title = styled.h1`
    display: flex;
    width: 243px;
    height: 70px;
    margin-top: 25px;

    font-weight: bold;
    font-size: 34px;
    line-height: 40px;

    color: #000000;
`;

const Categories = styled.div`
    display: flex;
    align-items: center;

    height: 50px;
    margin-top: 25px;
    overflow: auto;

    /* ::-webkit-scrollbar {
        width: 0;
        height: 6px;
        background: #E5E5E5;
    }

    ::-webkit-scrollbar-thumb {
        background: #424242;
    } */

    span {
        margin-right: 10px;

        font-weight: 600;
        font-size: 17px;
        line-height: 20px;
        color: #9A9A9D;

        &:hover {
            cursor: pointer;
            color: #70D159;
        }
    }
`;

const ProductsContainer = styled.div`
    display: flex;
    align-items: end;
    height: 318px;
    margin-top: 25px;
    overflow: auto;

`;

const Product = styled.div`
    display: flex;
    justify-content: center;

    position: relative;
    min-width: 220px;
    height: 270px;
    margin-right: 30px;

    background: #FFFFFF;
    box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
    border-radius: 20px;
`;

const ProductPicture = styled.figure`
    position: absolute;
    width: 150px;
    height: 150px;
    left: 37.5px;
    top: -45px;
    border-radius: 50%;

    background: #424242;

    img {
        width: 150px;
        height: 150px;
    }
`;

const ProductDescription = styled.span`
    width: 100%;
    text-align: center;

    font-weight: 600;
    font-size: 22px;
    line-height: 22px;
    color: #000000;

    margin-top: 135px;

    p {
        font-size: 16px;
        color: #868686;
    }

    div {
        margin-top: 25px;

        font-weight: bold;
        font-size: 17px;
        line-height: 20px;
        text-align: center;

        color: #70D159;
    }
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-around;

    width: 297px;
    margin-top: 35px;

    ion-icon {
        font-size: 25px;

        &:hover {
            cursor: pointer;
            color: #70D159;
        }
    }
`;

export default Products;