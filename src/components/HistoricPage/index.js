import React,{useState, useEffect,useContext, useMemo} from 'react';
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
import { useNavigate, useLocation } from 'react-router-dom';


export default function HistoricPage() {

   const navigate = useNavigate();
   const location = useLocation();
   const {info} = useContext(UserContext);
   const product = location.state;
   const BaseURL = 'http://localhost:5000';
   const [items,setItems]=useState();

   const alert = (text) => toast.error(`${text}`, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

   const config = useMemo(() => {
    const data = {
        headers: {
            "Authorization": `Bearer ${info.token}`
        }
    }
    return data;
}, [info.token]);
   
   useEffect(()=>{
    axios.post(`${BaseURL}/purchase`,product.items,config).then(res=>setItems(res.data).catch(err=>alert("Falha em trazer compras")))
   },[])


      function HistoricModel({product}){
        return(
          <>
          
        <div className='value'>
           <div className="address">{items.length} X</div>
            <img src={product.image} alt={product.description} />
            <div>
            <p  className="description">{product.description}</p>
            <p className="price">{product.value}</p>
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
 
  return (
    <Container align='flex-start'>
            <Header> Minhas Compras </Header>
            {
        product.items? 
        <Favorites>
          {
         product.items.map(product=>{
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
