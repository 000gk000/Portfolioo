import { useState } from "react"
import { useNavigate } from "react-router-dom"

//const URL = "http://localhost:3000/authapi/login"
const Login = () =>{

const [user,setUser] = useState({
    email:''
    ,password:''
})

const navigate = useNavigate();

const handleInput =(e) =>{
   let name =  e.target.name;
   let value = e.target.value;

   setUser({
    ...user,
    [name]:value
   })
}

const handleSubmit= async(e)=>{
    e.preventDefault();
    try {
        const response = await fetch("http://localhost:3000/authapi/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(user),
        })
        if(response.ok){
            alert('login succesfully');
            setUser({email:"" , password:""})
            navigate("/")
        }
        else{
            alert("invalid email or password")
            console.log("invalid email or pass ")
        }
    } catch (error) {
        console.log('error')
    }

}

    return (
        <>
        <div>
  <div className="flex justify-between items-center">
    <div>
      <img src="/images/login.png" className=" m-20" alt="Login Image" />
    </div>
    <div className="w-1/2 px-10 py-10 mr-20">
      <h1 className="text-center text-3xl font-bold mb-8">Login</h1>
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-md max-w-md mx-auto text-white">
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
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
          <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
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
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">Login</button>
      </form>
    </div>
  </div>
  </div>
</>

    )
}
export default Login