import { Route ,Routes } from "react-router-dom";
import instance from "./axios";
import { useState ,useEffect } from "react";



function App() {
  const [anmol ,setAnmol] = useState(null) ;


//   {
//     "token_type": "Bearer",
//     "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODI3ODA2ODAsImNvbXBhbnlOYW1lIjoiQW5tb2wgVHJhaW4gQ29tcGFueSIsImNsaWVudElEIjoiMTdkOGJkZDQtMDVlMS00YTQ2LTg0ZDEtMTE3Y2VmYTk0N2NlIiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjIwMTAwODAwMjkifQ.R2QsrTtHIdfw7iYhSJBPu4ovY04CYai-ZJBxMG0TcrU",
//     "expires_in": 1682780680
// }


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
