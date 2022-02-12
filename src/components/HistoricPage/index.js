import React,{useState, useEffect,useContext} from 'react';
import UserContext from '../../contexts/UserContext';
import axios from 'axios';
import CartIcon from '../../assets/add-to-cart.png'
import { Container,
  Favorites,
  Button,
  Header,
  Details
}from '../styles/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


export default function HistoricPage() {

   const navigate = useNavigate();
   const BaseURL = 'http://localhost:5000';
   const {info}=useContext(UserContext);
   const [boughtProducts,setBoughtProducts]=useState();
   useEffect(()=>{
      axios.get(`${BaseURL}/favorites`,{
       headers:{
         Authorization: `Bearer ${info.token}`
       }
     }).then(res=>{
       setBoughtProducts(res.data);
     }).catch(alert("Falha ao carregar favoritos"));
   },[info.token]);

      function HistoricModel({product}){
        return(
          <>
          
        <div className='block'>
            <img src={product.image} alt={product.description} />
            <div>
            <p  className="description">{product.description}</p>
            <p className="price">{product.price}</p>
            </div>
            <Details>
              <div className="delivered">
                entregue em:
              </div>
              <div className="address">
                {product.address}
              </div>
            </Details>
        </div>
        </>
        )
        
      }
   const alert = (text) => toast.error(`${text}`, {
     position: "top-center",
     autoClose: 5000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
   });
  return (
    <Container align='flex-start'>
            <Header> Minhas Compras </Header>
            {
        boughtProducts? 
        <Favorites>
          {
          boughtProducts.map(product=>{
            return(
              <HistoricModel 
              product={product}
              />
            )
          })
          }
        </Favorites>
        :
       <div className="empty">
         <img src={CartIcon} alt='Ícone de compra' />
         <p>Você ainda não tem nenhuma compra</p>
         <Button onClick={()=>navigate('/')}>Comecar a comprar</Button>
    </div>
      }
        <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
    </Container>
  )
}
