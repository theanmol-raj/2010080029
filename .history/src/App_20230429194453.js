import { Route ,Routes } from "react-router-dom";
import axios from 'axios';
import { useState ,useEffect } from "react";



function App() {
  const [anmol ,setAnmol] = useState(null) ;


  useEffect(()=>{
    axios.post('http://104.211.219.98/train/register', {
      firstName: 'Fred',
      lastName: 'Flintstone'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  } ,[])








  return (
    <div className="">
        <Routes>
          <Route path="/"  />
          

     </Routes>
    </div>
  );
}

export default App;
