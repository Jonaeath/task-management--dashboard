import './App.css'
import Home from './Component/Pages/Home/Home';
import SignIn from './Component/Pages/UserFile/SignIn/SignIn';
import SignUp from './Component/Pages/UserFile/SignUp/SignUp'
import Header from './component/Header/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  return (
   <div>
    <Router>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/signin' element={<SignIn/>} />
      </Routes>
    </Router>
   </div>
  )
}

export default App
