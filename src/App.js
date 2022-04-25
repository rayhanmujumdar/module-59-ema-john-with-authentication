import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Orders from './Components/Orders/Orders';
import Shop from './Components/Shop/Shop';
import SignUp from './Components/SignUp/SignUp';
import {Toaster} from 'react-hot-toast'
import RequiredAuth from './Components/Required auth/RequiredAuth';
import Shipping from './Components/Shipping/Shipping';

function App() {
  return (
    <div className='text-center'>
      <Header></Header>
      <Toaster />
        <Routes>
          <Route path='/' element={<Shop></Shop>}></Route>
          <Route path='/shop' element={<Shop></Shop>}></Route>
          <Route path='/orders' element={<Orders></Orders>}></Route>
          <Route path='/inventory' element={
            <RequiredAuth>
              <Inventory></Inventory>
            </RequiredAuth>
          }></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/shipping' element={
            <RequiredAuth>
              <Shipping></Shipping>
            </RequiredAuth>
          }></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
    </div>
  );
}

export default App;