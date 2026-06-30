import axios from "axios";

import {useState} from "react";



function SearchResult(){


const [id,setId]=useState("");

const [data,setData]=useState(null);



const search=async()=>{


const res =
await axios.get(

`http://localhost:5000/api/result/${id}`

);


setData(res.data);


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

Student Result

</h1>



<input

onChange={
e=>setId(e.target.value)
}


placeholder="Enter Student ID"

className="
w-full
p-3
rounded-xl
text-black
mb-4
"

/>



<button

onClick={search}

className="
bg-green-400
text-black
px-6
py-3
rounded-xl
font-bold
"

>

Search

</button>




{

data &&

<div className="mt-6">


<h2 className="text-2xl">

{data.name}

</h2>


<p>

Department:
{data.department}

</p>


{

data.subjects.map(

(s,i)=>(

<p key={i}>

{s.subject}
:
{s.mark}

</p>

)

)

}


<h2 className="text-xl mt-3">

Grade:
{data.grade}

</h2>


</div>


}



</div>


)


}


export default SearchResult;