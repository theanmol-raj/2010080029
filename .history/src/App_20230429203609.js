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



const makeAPICall = async () => {
  try {
    const response = await fetch('http://localhost:8080/', {mode:'cors'});
    const data = await response.json();
    console.log({ data })
  }
  catch (e) {
    console.log(e)
  }
}
useEffect(() => {
  makeAPICall();
}, [])
  






  return (
    <div className="">
        <Routes>
          <Route path="/"  />
          

     </Routes>
    </div>
  );
}

export default App;
