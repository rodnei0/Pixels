import React from 'react';
import LocationIcon from '../../assets/location.png';
import NextIcon from '../../assets/arrow-forward-outline.svg'

import {Container,Title} from '../styles/profile';

export default function UserProfile() {
    const teste = {name:"Maria",address:"Germany,Weissenberg Weg 209, Neuss-Deutschland"}
  return (
    <Container>
        <Title>Minha conta</Title>

        <div className="top">
         <h1>{teste.name}</h1>    
         <div className="address">
             <img src={LocationIcon} alt="Ícone de localização" />
             <p>{teste.address}</p>
        </div>              
        </div>

        <div className="flex">
            <p>Minhas compras</p>
            <img src={NextIcon} alt='Símbolo de próximo'/>
        </div>
        <div className="flex">
            <p>Lista de desejos</p>
            <img src={NextIcon} alt='Símbolo de próximo'/>
        </div>

    </Container>
  )
}
