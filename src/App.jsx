import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './components/home/Home'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import ElectronicFront from './components/electronics/electronicsfront/ElectronicFront'
import JeweleryFront from './components/jewlery/jewleryfront/JewleryFront'
import MenFront from './components/men/menfront/MenFront'
import WomenFront from './components/women/womenfront/WomenFront'
import ProductDetail from './components/home/productdetail/ProductDetail'
import ElectronicDetail from './components/electronics/electronicsfront/ElectronicDetail'
import JeweleryDetail from './components/jewlery/jewleryfront/JeweleryDetail'
import MenDetail from './components/men/menfront/MenDetail'
import WomenDetail from './components/women/womenfront/WomenDetail'
import UserData from './components/userData/UserData'
import SignUp from './components/signup/SignUp'
import GoogleAuth from './components/googleauth/GoogleAuth'
import ConfirmEmail from './components/forgetpassword/ConfirmEmail'
import ResetPassword from './components/forgetpassword/ResetPassword'
import EnhancedTable from './commoncomponents/table/TableComponent'
import SingleEmail from './components/singleEmail/singleEmail' 
import { GoogleOAuthProvider } from '@react-oauth/google'
import { CLIENT_ID } from './apis/auth'
import Login from './components/login/Login'
import OtpCode from './components/otp/OtpCode'
function App() {

  return (
    <>
    <Provider store={store}>
    <GoogleOAuthProvider clientId='240081279258-kt049q821j0u1ah4mq8n86pdkv99voi5.apps.googleusercontent.com'>
        <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/productdetail/:id' element={<ProductDetail/>}/>
        <Route path='/electronicsfront' element={<ElectronicFront/>}/>   
        <Route path='/electronicdetail/:id' element={<ElectronicDetail/>}/>  
        <Route path='/signup' element={<SignUp/>}/> 
        <Route path='/login' element={<Login/>}/>   
        <Route path='/jewleryfront' element={<JeweleryFront/>}/>
        <Route path='/jewlerydetail/:id' element={<JeweleryDetail/>}/>
        <Route path='/menfront' element={<MenFront/>}/>
        <Route path='/mendetail/:id' element={<MenDetail/>}/>
        <Route path='/womenfront' element={<WomenFront/>}/>
        <Route path='/womendetail/:id' element={<WomenDetail/>}/>
        {/* <Route path='/cartdetail' element={<CartDetail/>}/>
         */}
        <Route path='/cartdetail' element={<EnhancedTable />}/>
        <Route path='/userdata' element={<UserData />}/>
        <Route path='/confirm-email' element={<ConfirmEmail />}/>
        <Route path='/reset-password' element={<ResetPassword />}/>
        <Route path='/email' element={<SingleEmail/>}/>
        <Route path='/otp' element={<OtpCode/>}/>
      </Routes>
      </BrowserRouter>
     </GoogleOAuthProvider>
      </Provider>
    </>
  )
}

export default App
