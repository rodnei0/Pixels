import React,{useState, useEffect,useContext} from 'react';
import UserContext from '../../contexts/UserContext';
import axios from 'axios';
import FavoriteIcon from '../../assets/favorite.png'
import { Container,
  Favorites,
  Button,
  Header
}from '../styles/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


export default function FavoritesPage() {
  // const teste = [
  //   {
  //     image:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQw5MPbsM1qp3103W4O5YwuY1kOWCiplMAs3AvKqp_q4MCivcwY_ThIzlQKYV7u6VV3NvvMjyKDA_s&usqp=CAc',
  //     description:'Iphone 13 PRO',
  //     price:'$RS 12,500'
  //   },
  //   {
  //     image:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQw5MPbsM1qp3103W4O5YwuY1kOWCiplMAs3AvKqp_q4MCivcwY_ThIzlQKYV7u6VV3NvvMjyKDA_s&usqp=CAc',
  //     description:'Iphone 13 PRO',
  //     price:'$RS 12,500'
  //   },
  //   {
  //     image:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQw5MPbsM1qp3103W4O5YwuY1kOWCiplMAs3AvKqp_q4MCivcwY_ThIzlQKYV7u6VV3NvvMjyKDA_s&usqp=CAc',
  //     description:'Iphone 13 PRO',
  //     price:'$RS 12,500'
  //   }
  // ]
   const BaseURL = 'http://localhost:5000';
   const {info}=useContext(UserContext);
   const [favoriteProducts,setFavoriteProducts]=useState();

   useEffect(()=>{
      axios.get(`${BaseURL}/favorites`,{
       headers:{
         Authorization: `Bearer ${info.token}`
       }
     }).then(res=>{
       setFavoriteProducts(res.data);
    
     }).catch(alert("Falha ao carregar favoritos"));
   },[info.token]);

  const navigate = useNavigate();

  function FavoritesModel({product}){
    return(
    <div className='block'>
        <img src={product.image} alt={product.description} />
        <div>
        <p  className="description">{product.description}</p>
        <p className="price">{product.price}</p>
        </div>
        <Button onClick={()=>navigate('/')}>Adicionar</Button> 
    </div>
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
    <Container align={'flex-start'}>
      <Header>Favoritos</Header>
      {
        favoriteProducts? 
        <Favorites>
          {
          favoriteProducts.map(product=>{
            return(
              <FavoritesModel 
              product={product}
              />
            )
          })
          }
        </Favorites>
        :
       <div className="empty">
         <img src={FavoriteIcon} alt='Ícone de coração' />
         <p>Você ainda não tem nenhum item na sua lista de desejos</p>
         <Button onClick={()=>navigate('/')}>Adicionar</Button>
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
