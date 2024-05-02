import {Routes,Route} from 'react-router-dom'
import { Register } from './pages/register/Register';
import { Login } from './pages/Login/Login';
import { Home } from './pages/Home';
import toast, { Toaster } from 'react-hot-toast';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <div >
		{/* <div class="area"> */}

    <Toaster/>
      <Routes>
      <Route path='/register'  element={<Register/>}/>
      <Route path='/'  element={<Login/>}/>
      <Route path='/home'  element={<Home/>}/>
      </Routes>

      {/* <!--Start Background Animation Body--> */}
			{/* <ul class="circles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</div> */}
		{/* <!--End Background Animation Body--> */}
    </div>
  );
}

export default App;
