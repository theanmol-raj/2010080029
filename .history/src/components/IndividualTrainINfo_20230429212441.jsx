import React from 'react'
import { useParams } from 'react-router-dom'

function IndividualTrainINfo({data}) {
    const {id} = useParams()
    console.log(data[id])

    const train = data[id] ;
  return (
    <div className=' bg-gradient-to-r from-yellow-500 to-orange-500 h-screen rounded-3xl p-4 m-4'>
        <img src="" className=''/>
    </div>
  )
}

export default IndividualTrainINfo