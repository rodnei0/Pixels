import React, { useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './style/reset.css'
import './style/style.css'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp/'
import FavoritesPage from './components/FavoritesPage/';
import HistoricPage from './components/HistoricPage';
import UserContext from './contexts/UserContext'



export default function App() {
  const [info,setInfo]=useState();
  return (
    <BrowserRouter>
          <UserContext.Provider value={{info,setInfo}}>
            <Routes>
              <Route path="/signin" element={<SignIn />}/>
              <Route path="/signup" element={<SignUp />}/>
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/historic" element={<HistoricPage />} />
            </Routes>
        </UserContext.Provider>
    </BrowserRouter>
  )
}