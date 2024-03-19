import {  NavLink } from "react-router-dom";

const Navbar = ()=>{
    return(
        <>
            <div className="flex justify-between items-center px-6 bg-gray-200">
              <div>
                <img src="./images/logo.png" className="w-10 h-10"></img>
             </div>

             <div>
                <ul className="flex space-x-4">
                   <li>
                    <NavLink to="/">Home</NavLink>
                   </li>
                   <li>
                    <NavLink to="/about">About</NavLink>
                   </li>
                   <li>
                    <NavLink to="/contact">Contact</NavLink>
                   </li>
                   <li>
                    <NavLink to="/login">Login</NavLink>
                   </li>
                   <li>
                    <NavLink  to="/register">Register</NavLink>
                   </li>
                </ul>
             </div>
        </div>
          
             
        </>

    )
}

export default Navbar