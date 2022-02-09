import axios from "axios";
import { useMemo } from "react";
import { ProductDescription, ProductPicture, Product } from "./styles"

let array = [
    {
        id: 1,
        category: "smartphone",
        image: "https://files.tecnoblog.net/wp-content/uploads/2021/09/iphone-13-produto-2-700x700.png",
        name: "iPhone 13",
        shortDescription: "Tela de 6.1",
        description: "bla bla bla",
        value: 7599
    },
    {
        id: 2,
        category: "smartphone",
        image: "https://files.tecnoblog.net/wp-content/uploads/2021/09/iphone-13-produto-2-700x700.png",
        name: "iPhone 13",
        shortDescription: "Tela de 6.1",
        description: "bla bla bla",
        value: 7599
    },
    {
        id: 3,
        category: "smartphone",
        image: "https://files.tecnoblog.net/wp-content/uploads/2021/09/iphone-13-produto-2-700x700.png",
        name: "iPhone 13",
        shortDescription: "Tela de 6.1",
        description: "bla bla bla",
        value: 7599
    }
]

function Products() {
    // const config = useMemo(() => {
    //     const data = {
    //         headers: {
    //             category: "smartphone"
    //         }
    //     }
    //     return data;
    // }, []);
    
    // const promisse = axios.get("http://localhost:5000/products", config);
    // promisse.then(response => {
    //     console.log(response);
    // });
    // promisse.catch(response => {
    //     console.log(response);
    // });

    return (
        array.map(product => {
            return (
                <Product key={product.id}>
                    <ProductPicture>
                        <img src={product.image} alt="iphone"></img>
                    </ProductPicture>
                    <ProductDescription>
                        {product.name}
                        <p>{product.shortDescription}</p>
                        <div>R$ {product.value}</div>
                    </ProductDescription> 
                </Product>
            );
        })
    );
}

export default Products;