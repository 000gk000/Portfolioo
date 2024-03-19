import { useState } from "react";

const Contact = ()=>{


const [contact,setContact] = useState({
    username:"",
    email:"",
    message:""
})
const handleInput = (e) =>{
    let name = e.target.name
    let value = e.target.value 

    setContact({
        ...contact,[name]:value
    })
}

const handleSubmit = (e) =>{
    e.preventDefault();
    alert(contact);

}
    return (
        <>
         <div className="flex justify-between items-center">
            <div>
                 <img src="/images/login.png" className="w-1/2 h-1/2 m-20"></img>
            </div>
            <div className="w-1/2 border-2 border-solid border-black px-10 py-10 mr-20" >
               
                 <form onSubmit={handleSubmit}>
                    <div>
                        
                        <div>
                        <label htmlFor="username">username</label><br></br>
                        <input className="border-2 border-solid border-black"
                         type = "text"
                         name="username"
                         placeholder="enter your name"
                         id="username"
                         required
                         autoComplete="off"
                         value={contact.username}
                         onChange={handleInput}
                         
                        />
                        </div>
                       
                        </div>
                        <div >
                        <label htmlFor="email">email</label><br></br>
                        <input className="border-2 border-solid border-black"
                         type = "email"
                         name="email"
                         placeholder="email"
                         id="email"
                         required
                         autoComplete="off"
                         value={contact.email}
                         onChange={handleInput}
                        />
                        </div>
                       <div>
                        <h3>message</h3>
                       <textarea className="border-2 border-solid border-black"
                    
                       name="message"
                       placeholder="message"
                       id="message"
                       value={contact.message}
                       onChange={handleInput}

                       />
                        
                       </div>
                       <button  type="submit" className="border-2 border-solid border-black ">SUBMIT </button>


                    
                 </form>
                 
            </div>
            
        </div> 
        </>
    )
}

export default Contact;