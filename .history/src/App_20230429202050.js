import { Route ,Routes } from "react-router-dom";
import instance from "./axios";
import { useState ,useEffect } from "react";



function App() {
  const [anmol ,setAnmol] = useState(null) ;


  useEffect(()=>{
    instance.post('http://104.211.219.98/train/auth', {
      "companyName": "Anmol Train Company",
      "ownerName": "Anmol RAj",
      "rollNo": "2010080029",
      "clientID": "17d8bdd4-05e1-4a46-84d1-117cefa947ce",
	"clientSecret": "gqubNiIzWcEZsdyU",
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
