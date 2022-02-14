import React, {useEffect,useState, useMemo,useContext} from 'react'
import axios from 'axios';
import UserContext from '../../contexts/UserContext';
import { Container,
    Favorites,
    Button,
    Header,
    Details
  }from '../styles/styles';
  import dayjs from 'dayjs';
  import { Link, useNavigate } from 'react-router-dom';
  import CartIcon from '../../assets/add-to-cart.png';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  

export default function Purchases() {
    const BaseURL = 'http://localhost:5000';
    const {info}=useContext(UserContext);
    const [boughtProducts,setBoughtProducts]=useState();
    const navigate = useNavigate();
 
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
       axios.get(`${BaseURL}/historic`,config).then(res=>{
        setBoughtProducts(res.data);
      }).catch(alert("Falha ao carregar favoritos"));
    },[]);

    function HistoricModel({product}){
        return(
          <>
          <Link to={'/historic'} state={product}>
        <div className='value'>
            <div>
            <p  className="description">Data da compra {dayjs(product.date).format('DD/MM/YYYY')}</p>
            <p className="price">{product.items.length} itens</p>
            </div>
            <Details>
              <div className="delivered">
               entregue em:
              </div>
              <div className="address">
                {info.address}
              </div>
            </Details>
        </div>
        </Link>
        </>
        )
        
      }
  return (
    <Container>
      <Header> Minhas Compras </Header>
      
         {
        boughtProducts? 
        <Favorites>
          {
         boughtProducts.map(product=>{
          return <HistoricModel product={product} />
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
