import { Top, MainContainer, Container, Checkout, Total, Bottom } from "./styles.js"
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import BasketContext from "../../contexts/BasketContext.js";
import BasketProducts from "./BasketProducts.js";
// import styled from "styled-components";
// import axios from "axios";

function BasketPage() {
    const { basket, setBasket }  = useContext(BasketContext);
    const { total, setTotal } = useContext(BasketContext);
    const navigate = useNavigate();

    // useEffect(() => {
    //     setProducts(basket);
    // },[setProducts, basket])

    // const config = useMemo(() => {
    //     const data = {
    //             basket : basket
    //         }
    //     return data;
    // }, [basket]);

    // useEffect(() => {
    //     const promisse = axios.post("http://localhost:5000/basket", config);
    //     promisse.then(response => {
    //         setProducts(response.data);
    //     });
    //     promisse.catch(response => {
    //         console.log(response);
    //     });
    // }, [config, setProducts]);

    function CalculateTotal() {
        useEffect(() => {
            let sum = 0;
            basket.forEach(product => {
                sum+= product.value * product.quantity;
            })
            setTotal(sum)
        })
    }

    CalculateTotal();
        
    function cleanBasket() {
        alert("Tem certeza que deseja remover todos os itens do carrinho?");
        setBasket([])
    }

    return (
        <MainContainer>
            <Top>
                <div>
                    <ion-icon name="arrow-back-outline" onClick={() => navigate(-1)}></ion-icon>
                    <span>Carrinho</span>
                    <ion-icon name="trash-outline" onClick={cleanBasket}></ion-icon>
                </div>
            </Top>
            <Container>
                <BasketProducts></BasketProducts>
            </Container>
            <Bottom>
                <Total>
                    <span>Total</span>
                    <div>R$ {total.toFixed(2)}</div>
                </Total>
                <Checkout>Checkout</Checkout>
            </Bottom>
        </MainContainer>
    );
};

export default BasketPage;

