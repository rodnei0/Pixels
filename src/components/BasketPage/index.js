// import { Top, MainContainer, Container, Name, ProductInfo, FullDescription, Value, AddBasket } from "./styles.js"
// import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useMemo } from "react";
import BasketContext from "../../contexts/BasketContext.js";
import axios from "axios";

function BasketPage() {
    const { basket, products, setProducts }  = useContext(BasketContext);
    // const navigate = useNavigate();

    const config = useMemo(() => {
        const data = {
                basket : basket
            }
        return data;
    }, [basket]);

    useEffect(() => {
        const promisse = axios.post("http://localhost:5000/basket", config);
        promisse.then(response => {
            setProducts(response.data);
        });
        promisse.catch(response => {
            console.log(response);
        });
    }, [config, setProducts]);

    // console.log(products)

    return (
        // <MainContainer>
        //     <Top>
        //         <ion-icon name="arrow-back-outline" onClick={() => navigate(-1)}></ion-icon>
        //         <span>Carrinho</span>
        //         <ion-icon name="trash-outline"></ion-icon>
        //     </Top>
        //     <Container>
        //         <ProductInfo>
        //             <Name>{product.name}</Name>
        //             <FullDescription>{product.description}</FullDescription>
        //             <Value><p>Apartir de</p><span>R$ {product.value.toFixed(2)}</span></Value>
        //         </ProductInfo>
        //     </Container>
        // </MainContainer>
        <></>
    );
};

export default BasketPage;