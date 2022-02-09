import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { ProductDescription, ProductPicture, Product } from "./styles"

function Products({category}) {
    const [ products, setProducts ] = useState([]);

    const config = useMemo(() => {
        const data = {
            headers: {
                category: category
            }
        }
        return data;
    }, [category]);

    useEffect(() => {
        const promisse = axios.get("http://localhost:5000/products", config);
        promisse.then(response => {
            setProducts(response.data)
        });
        promisse.catch(response => {
            console.log(response);
        });
    }, [config]);

    return (
        products.map(product => {
            return (
                <Product key={product._id}>
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