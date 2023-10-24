import './App.css'
import { useReducer, useEffect } from 'react';
import { AuthReducer } from './auth/authReducer';
import { router } from './pages/Router';
import { RouterProvider } from "react-router-dom";
import { AuthContext } from './auth/authContext';

const init = () => {
  return JSON.parse(localStorage.getItem('auth')) || { logged: false };
}
function App() {

  const [auth, dispatch] = useReducer(AuthReducer, {}, init);

  useEffect(() => {
    localStorage.setItem('auth', JSON.stringify(auth));
  }, [auth]);

  return (<AuthContext.Provider value={{ auth, dispatch }}>
    <RouterProvider router={router} />
  </AuthContext.Provider>)
}

export default App
