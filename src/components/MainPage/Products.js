import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
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
                <Link to={"/product"} key={product._id} state={product}>
                    <Product>
                        <ProductPicture>
                            <img src={product.image} alt="iphone"></img>
                        </ProductPicture>
                        <ProductDescription>
                            {product.name}
                            <p>{product.shortDescription}</p>
                            <div>R$ {product.value}</div>
                        </ProductDescription> 
                    </Product>
                </Link>
            );
        })
    );
}

export default Products;