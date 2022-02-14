import React, {useContext} from 'react';
import LocationIcon from '../../assets/location.png';
import NextIcon from '../../assets/arrow-forward-outline.svg';
import UserContext from '../../contexts/UserContext'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Container,Title} from '../styles/profile';

export default function UserProfile() {
    const {info}=useContext(UserContext);
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

    if(!info){
      alert("Faça o login no seu perfil");
      return navigate('/signin')
    }

  return (
    <Container>
        <Title>Minha conta</Title>

        <div className="top">
         <h1>{info.name}</h1>    
         <div className="address">
             <img src={LocationIcon} alt="Ícone de localização" />
             <p>{info.address}</p>
        </div>              
        </div>

        <div className="flex">
            <p onClick={()=>navigate('/historic')}>Minhas compras</p>
            <img src={NextIcon} alt='Símbolo de próximo'/>
        </div>
        <div className="flex">
            <p onClick={()=>navigate('/favorites')}>Lista de desejos</p>
            <img src={NextIcon} alt='Símbolo de próximo'/>
        </div>
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
