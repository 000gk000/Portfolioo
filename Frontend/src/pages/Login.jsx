import { useState } from "react"

const Login = () =>{

const [user,setUser] = useState({
    email:''
    ,password:''
})

const handleInput =(e) =>{
   let name =  e.target.name;
   let value = e.target.value;

   setUser({
    ...user,
    [name]:value
   })
}

const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(user);
    
}

    return (
        <>
           <div className="flex justify-between items-center">
            <div>
                 <img src="/images/login.png" className="w-1/2 h-1/2 m-20"></img>
            </div>
            <div className="w-1/2 border-2 border-solid border-black px-10 py-10 mr-20" >
                <h1 className="text-center">Login</h1>
                 <form onSubmit={handleSubmit}>
                    <div>
                        
                        <div>
                        <label htmlFor="email">email</label><br></br>
                        <input className="border-2 border-solid border-black"
                         type = "text"
                         name="email"
                         placeholder="enter your email"
                         id="email"
                         required
                         autoComplete="off"
                         value={user.email}
                         onChange={handleInput}
                        />
                        </div>
                       
                        </div>
                        <div >
                        <label htmlFor="password">password</label><br></br>
                        <input className="border-2 border-solid border-black"
                         type = "password"
                         name="password"
                         placeholder="password"
                         id="password"
                         required
                         autoComplete="off"
                         value={user.password}
                         onChange={handleInput}
                        />
                        </div>
                        <button type="submit" className="border-2 border-solid border-black ">LOGIN </button>
                       

                    
                 </form>
                 
            </div>
            
        </div> 
        </>
    )
}
export default Login