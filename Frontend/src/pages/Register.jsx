import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Register = ()=>{

const[user,setUser] = useState({

    username:'',
    email:'',
    phone:'',
    password:''

})
const navigate = useNavigate();

// handling the input value 
const handleInput = (e) =>{
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
        ...user,[name]:value,
    })
}

 const handleSubmit = async (e) =>{
    e.preventDefault();
    alert(user);
    console.log(user)
 try {
    const response =  await fetch(`http://localhost:3000/authapi/register`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(user),
    })
    if(response.ok){
        setUser({
    username:'',
    email:'',
    phone:'',
    password:''

        })
        navigate('/login')
    }
    console.log(response)
 } catch (error) {
    console.log('register',error);
 }
    
}

    return(
        <>
  <div className="flex justify-between items-center">
    <div>
      <img src="/images/login.png" className=" m-20" alt="Login Image" />
    </div>
    <div className="w-1/2 px-10 py-10 mr-20">
      <h1 className="text-center text-3xl font-bold mb-8">Registration Form</h1>
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-md max-w-md mx-auto text-white">
        <div className="mb-6">
          <label htmlFor="username" className="block text-sm font-medium">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            required
            autoComplete="off"
            value={user.username}
            onChange={handleInput}
            className="w-full px-3 py-2 bg-gray-700 border border-solid border-gray-600 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
            autoComplete="off"
            value={user.email}
            onChange={handleInput}
            className="w-full px-3 py-2 bg-gray-700 border border-solid border-gray-600 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="phone" className="block text-sm font-medium">Phone</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Enter phone number"
            required
            autoComplete="off"
            value={user.phone}
            onChange={handleInput}
            className="w-full px-3 py-2 bg-gray-700 border border-solid border-gray-600 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
            autoComplete="off"
            value={user.password}
            onChange={handleInput}
            className="w-full px-3 py-2 bg-gray-700 border border-solid border-gray-600 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">Register Now</button>
      </form>
    </div>
  </div>
</>

    )
}

export default Register