import { useState } from "react"

const Register = ()=>{

const[user,setUser] = useState({

    username:'',
    email:'',
    phone:'',
    password:''

})

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
    console.log(response)
 } catch (error) {
    console.log('register',error);
 }
    

}

    return(
        <>
         <div className="flex justify-between items-center">
            <div>
                 <img src="/images/login.png" className="w-1/2 h-1/2 m-20"></img>
            </div>
            <div className="w-1/2 border-2 border-solid border-black px-10 py-10 mr-20" >
                <h1 className="text-center">Registration form</h1>
                 <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">username</label><br></br>
                        <input className="border-2 border-solid border-black"
                         type = "text"
                         name="username"
                         placeholder="username"
                         id="username"
                         required
                         autoComplete="off"
                         value={user.username}
                         onChange={handleInput}
                        />
                        </div>
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
                        <div>
                        <label htmlFor="phone">phone</label><br></br>
                        <input className="border-2 border-solid border-black"
                         type = "number"
                         name="phone"
                         placeholder="enter phone no."
                         id="phone"
                         required
                         autoComplete="off"
                         value={user.phone}
                         onChange={handleInput}
                        />
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
                        <button type="submit" className="border-2 border-solid border-black ">Register now  </button>
                       

                    
                 </form>
                 
            </div>
            
        </div> 
        </>
    )
}

export default Register