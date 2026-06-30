import axios from "axios";


function AddResult(){



const save=()=>{


axios.post(

"http://localhost:5000/api/result",

{

studentId:"CSE101",

name:"Mahim",

department:"CSE",


subjects:[

{
subject:"Programming",
mark:90
},

{
subject:"Database",
mark:85
}


],


total:175,

grade:"A+"


}


)


alert("Result Saved")

}




return(


<div className="
bg-white/10
backdrop-blur-xl
border
border-white/20
rounded-3xl
p-8
text-white
shadow-xl
">


<h1 className="
text-3xl
font-bold
mb-5
">

Teacher Panel

</h1>


<button

onClick={save}

className="
w-full
bg-gradient-to-r
from-cyan-400
to-blue-500
py-3
rounded-xl
font-bold
hover:scale-105
transition
"

>

Save Demo Result

</button>


</div>


)


}


export default AddResult;