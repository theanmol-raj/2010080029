import React from 'react'
import { useParams } from 'react-router-dom'

function IndividualTrainINfo({data}) {
    const {id} = useParams()
    console.log(data[id] ,id)
  return (
    <div>IndividualTrainINfo</div>
  )
}

export default IndividualTrainINfo