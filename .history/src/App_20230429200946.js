import { Route ,Routes } from "react-router-dom";
import instance from "./axios";
import { useState ,useEffect } from "react";
import TrainINfo from "./components/TrainINfo";
import IndividualTrainINfo from "./components/IndividualTrainINfo";



function App() {
  // {
  //   "companyName": "Anmol Train Company",
  //   "clientID": "17d8bdd4-05e1-4a46-84d1-117cefa947ce",
  //   "clientSecret": "gqubNiIzWcEZsdyU",
  // }
  






  return (
    <div className="">
        <Routes>
          <Route path="/" element={<TrainINfo />}  />
          <Route path="/q=:id" element={<IndividualTrainINfo />}  />
          

     </Routes>
    </div>
  );
}

export default App;
