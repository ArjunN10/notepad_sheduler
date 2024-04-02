import {Routes,Route} from 'react-router-dom'
import { Register } from './pages/register/Register';
import { Login } from './pages/Login/Login';
import { Home } from './pages/Home';
import toast, { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div >

    <Toaster/>
      <Routes>
      <Route path='/register'  element={<Register/>}/>
      <Route path='/'  element={<Login/>}/>
      <Route path='/home'  element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
