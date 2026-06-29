import { useState } from "react";
import image1 from'./assets/coin.png';
import image2 from'./assets/tail.png';
   const container="flex flex-col jusitify-center item-center bg-purple-200 min-h-screen bg-gradient-to-r from-to-teal-900";
const buttonstyle="   hover:scale-110 transition duration-300 p-5 rounded-full w-25 h-25 bg-purple-400";
const para="text-bold text-2xl text-balck"



function Home(){
     const [user,setUser]=useState("");
     const[ computer,setComputer]=useState("");
     const [result,setResult]=useState("")
       
      const  choice=["Head","Tail"]
     const handleClick=(userChoice)=>
     {
        const randomIndex=Math.floor(Math.random()*2)
         const computerMove =choice [randomIndex];
    
     
     setUser(userChoice)
     setComputer(computerMove)
  

     if(userChoice==="head"&& computerMove==="Head")
     {
        setResult("Win")
     }
     else{
        setResult("Loss")
     }

 }


return(
    <>
    <div className={container}>
      <div className="flex justify-center">
         <div>
            <button  className={buttonstyle} onClick={()=> handleClick("head")}><img src={image1} /></button>
    <button className={buttonstyle} onClick={()=> handleClick("tail")}><img src={image2} /></button>
         </div>
    
    </div>
    <div className="flex justify-center">
      <div>
    <p  className={para}>result:{result}</p>
    <p  className={para}>user:{user}</p>
    <p  className={para}>Computer:{computer}</p>
    </div>
    </div>
    </div>
    
    </>
)
}
export default Home;