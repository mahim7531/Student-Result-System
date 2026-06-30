import AddResult from "./components/AddResult";

import SearchResult from "./components/SearchResult";


function App(){


return(

<div className="
min-h-screen
flex
items-center
justify-center
p-10
">


<div className="
grid
md:grid-cols-2
gap-10
w-full
max-w-5xl
">


<AddResult/>


<SearchResult/>


</div>


</div>


)


}


export default App;