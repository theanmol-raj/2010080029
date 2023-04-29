import { Route ,Routes } from "react-router-dom";
import axios from 'axios';
import { useState ,useEffect } from "react";



function App() {
  const [anmol ,setAnmol] = useState(null) ;


  useEffect(()=>{
    axios.post('http://104.211.219.98/train/register', {
      "companyName": "Anmol Train Company",
      "ownerName": "Anmol RAj",
      "rollNo": "2010080029",
      "ownerEmail": "2010080029aids@gmail.com",
      "accessCode": "sfykSB"
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
