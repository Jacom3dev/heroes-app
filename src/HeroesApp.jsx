import React, { useReducer,useEffect} from 'react';
import { AuthContext } from './auth/authContext';
import { authReducers } from './auth/authReducers';
import AppRouter from './routes/AppRouter';

const init = ()=>{
  return JSON.parse(localStorage.getItem('user')) || {logged:false};
}
const HeroesApp = () => {
  const [user,dispatch] = useReducer(authReducers,{},init);

  useEffect(() => {
    if (!user) return;
    localStorage.setItem('user',JSON.stringify(user));
  }, [user])
  
  return (
    <AuthContext.Provider value={{
      user,
      dispatch
    }}>
      <AppRouter/>
    </AuthContext.Provider>
  )
}

export default HeroesApp;