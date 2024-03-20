
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CrouselData from "../components/crouseldata"
const Home = ()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        
      }
      
    return (
        <> <div className="bg-gray800">
                  <div className="flex justify-between items-center" >
                 <div className="w-1/2 m-10 px-6">
                 Hello, my name is Gopal Kumar. I am a full-stack web developer specializing 
                 in the MERN stack. Despite being a fresher, I have valuable internship 
                 experience of 6 months in web development, where I focused on 
                 building modern web applications using MongoDB, Express.js, React.js,
                  and Node.js.During my internship, I gained hands-on experience in frontend and backend development, 
                  version control with Git, and collaborating effectively in team environments. I am passionate about continuous learning and growth, and I am eager to contribute my skills and enthusiasm to innovative web projects.
                  I am excited about the opportunity to join your team and contribute to the success of your organization. Thank you for considering my application.
                 </div>
                 <div className= " flex w-1/2">
                   
                    space for photo 
                   
                 </div>


            </div>

           

         <div className="w-3/4 m-auto">
            <div className="mt-20">
                <Slider{...settings}>
                {CrouselData().map((d,index)=>(
                    <div key={index} className="bg-white h-[450px] text-black rounded-xl">
                        <div className="h-56 rounded-t-xl bg-indigo-500 flex jusitfy-center items-center">
                            <img src={d.img} className="h-44 w-44 rounded-full"></img>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4 p-4">
                            <p className="text-xl font-semibold">{d.name}</p>
                            <p>{d.review}</p>
                         </div>
                     </div>    
                ))}
                </Slider>
            </div>
            </div> 
        </div>
         

           
        </>
    )
}

export default Home 