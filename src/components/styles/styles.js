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

font-size:22px;
font-weight:bold;

box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

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



padding:20px;

.empty{
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    height:100vh;
    img{
        width:30px;
        height:30px;
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

font-weight: bold;

padding-top:80px;

.price{
    color:#41EF7B;
    padding:10px;
}
.description{
    color:#424242;
    padding:10px;
}
img{
    border-radius: 14px;
    width:60px;
}

.block{
display:flex;
align-items:center;
padding:12px;
}

`

const Button = styled.button` 

all:unset;
color:white;

width:80px;
height:40px;

display:flex;
justify-content: center;
align-items: center;

background-color: #424242;

cursor:pointer;


:hover{
    background-color: #41EF7B;
    width:73px;
    height:37px;
}
`
export {
    Container,
    Favorites,
    Button,
    Header
}