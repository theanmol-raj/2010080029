import React from 'react'
import { useParams } from 'react-router-dom'

function IndividualTrainINfo({data}) {
    const {id} = useParams()
    console.log(data[id])

    const train = data[id] ;
  return (
    <div className=' bg-gradient-to-r flex justify-center items-center from-yellow-500 to-orange-500 h-screen rounded-3xl p-4 m-4'>
        <div className=' bg-white p-4 flex flex-col justify-center items-center'>
        <img src="https://media.istockphoto.com/id/1189029599/photo/passenger-train-india.jpg?s=612x612&w=0&k=20&c=gO7cJw0zhVhVrQ4DIG_Tr0llD52_dS-DKsWU43CWiXs=" />

        </div>
    </div>
  )
}

export default IndividualTrainINfo