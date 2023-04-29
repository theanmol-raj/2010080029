import { Route, Routes } from "react-router-dom";
import instance from "./axios";
import { useState, useEffect } from "react";
import TrainINfo from "./components/TrainINfo";
import IndividualTrainINfo from "./components/IndividualTrainINfo";

function App() {
  const [anmol, setAnmol] = useState(0);

  //   {
  //     "token_type": "Bearer",
  //     "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODI3ODA2ODAsImNvbXBhbnlOYW1lIjoiQW5tb2wgVHJhaW4gQ29tcGFueSIsImNsaWVudElEIjoiMTdkOGJkZDQtMDVlMS00YTQ2LTg0ZDEtMTE3Y2VmYTk0N2NlIiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjIwMTAwODAwMjkifQ.R2QsrTtHIdfw7iYhSJBPu4ovY04CYai-ZJBxMG0TcrU",
  //     "expires_in": 1682780680
  // }\

  function setter(num){
    setAnmol(num)
  }

  const data = [
    {
      trainName: "Chennai Exp",
      trainNumber: "2344",
      departureTime: { Hours: 21, Minutes: 35, Seconds: 0 },
      seatsAvailable: { sleeper: 3, AC: 1 },
      price: { sleeper: 363, AC: 485 },
      delayedBy: 15,
    },
    {
      trainName: "Mumbai Exp",
      trainNumber: "2343",
      departureTime: { Hours: 22, Minutes: 37, Seconds: 0 },
      seatsAvailable: { sleeper: 8, AC: 15 },
      price: { sleeper: 570, AC: 670 },
      delayedBy: 16,
    },
    {
      trainName: "Manoranjan Exp",
      trainNumber: "2347",
      departureTime: { Hours: 17, Minutes: 33, Seconds: 0 },
      seatsAvailable: { sleeper: 5, AC: 1 },
      price: { sleeper: 286, AC: 413 },
      delayedBy: 12,
    },
    {
      trainName: "Kolkata Exp",
      trainNumber: "2345",
      departureTime: { Hours: 20, Minutes: 15, Seconds: 0 },
      seatsAvailable: { sleeper: 16, AC: 70 },
      price: { sleeper: 560, AC: 660 },
      delayedBy: 14,
    },
    {
      trainName: "Pune Exp",
      trainNumber: "2342",
      departureTime: { Hours: 23, Minutes: 0, Seconds: 0 },
      seatsAvailable: { sleeper: 6, AC: 7 },
      price: { sleeper: 749, AC: 1749 },
      delayedBy: 17,
    },
    {
      trainName: "Test Exp",
      trainNumber: "2348",
      departureTime: { Hours: 15, Minutes: 55, Seconds: 0 },
      seatsAvailable: { sleeper: 1, AC: 0 },
      price: { sleeper: 692, AC: 979 },
      delayedBy: 11,
    },
    {
      trainName: "Manu Exp",
      trainNumber: "2346",
      departureTime: { Hours: 19, Minutes: 0, Seconds: 0 },
      seatsAvailable: { sleeper: 15, AC: 10 },
      price: { sleeper: 510, AC: 710 },
      delayedBy: 13,
    },
    {
      trainName: "Hyderabad Exp",
      trainNumber: "2341",
      departureTime: { Hours: 23, Minutes: 55, Seconds: 0 },
      seatsAvailable: { sleeper: 6, AC: 7 },
      price: { sleeper: 554, AC: 1854 },
      delayedBy: 5,
    },
  ];

  useEffect(()=>{
    instance.get("http://104.211.219.98/train/trains")
  })


  return (
    <div className="">
    <h1 className=" text-center text-5xl py-8 font-extrabold text-white bg-transparent">Anmol Train System</h1>
      <Routes>
        <Route path="/" element={<TrainINfo setter={setter} data={data} />} />
        <Route path="/:id" element = {<IndividualTrainINfo data ={data}/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
