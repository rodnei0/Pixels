import styled from 'styled-components';


const Header = styled.div` 
position:fixed;
top:0;
left:0;
width:100%;
height:49px;

display:flex;
justify-content:center;
align-items:center;

font-size:20px;
font-weight:bold;

box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);

color:#424242;

margin-bottom:80px;
`
;
const Container = styled.div`
display:flex;
justify-content:${props=>props.align};
align-items:center;
flex-direction: column;
height:100vh;

background-color:white;


padding:20px;

.empty{
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    height:100vh;
    img{
        width:50px;
        height:50px;
    }
    p{
        font-size:18px;
        font-weight: bold;
        word-wrap: break-word;
        text-align: center;
        color: black;

        padding:25px;
    }
}
`
const Favorites = styled.div` 
width:100%;

font-weight: bold;

padding-top:80px;



.price{
    color:#70D159;
    padding:10px;
}
.description{
    color:rgba(0, 0, 0, 0.5);
    padding:10px;
}
img{
    border-radius: 14px;
    width:60px;
}

.block{

display:flex;
align-items:center;
gap:12px;

padding:12px;
}

`

const Button = styled.button` 

all:unset;
color:white;


font-weight: bold;

display:flex;
justify-content: center;
align-items: center;

background-color: #424242;

border-radius:9px;

cursor:pointer;

padding:15px;


:hover{
    background-color: #70D159;
    padding:12px;
}
`
const Details = styled.div` 
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;

.delivered{
    color:#141310;
    font-size: 16px;
    font-weight: bold;

    padding-left:12px;
}
.address{
    font-size:14px;
    color:rgba(0, 0, 0, 0.5);
    word-wrap:break-word;
}

`
export {
    Container,
    Favorites,
    Button,
    Header,
    Details
}