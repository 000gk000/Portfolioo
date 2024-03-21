
import './App.css'
import{BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'

// const router = createBrowserRouter ([
//   {
//     path:'/',
//     element:<div><Home/></div>
//   },
//   {
//     path:'/about',
//     element:<div><About/></div>
//   },
//   {
//     path:'/contact',
//     element:<div><Contact/></div>
//   },
//   {
//     path:'/login',
//     element:<div><Login/></div>
//   },
//   {
//     path:'/register',
//     element:<div><Register/></div>
//   }
// ])


function App() {
 

  return (
   
    
        <>
       <BrowserRouter>
       <Navbar/>
       <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/login" element={<Login />} />
       <Route path="/register" element={<Register />} />
       <Route path="/contact" element={<Contact />} />

       </Routes>
       </BrowserRouter>
        </>
  )
}

export default App

