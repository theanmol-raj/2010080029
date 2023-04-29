import React from 'react'
import { useParams } from 'react-router-dom'

function IndividualTrainINfo({data}) {
    const {id} = useParams()
    console.log(data[id])
  return (
    <div className=' bg-gradient-to-r from-yellow-500 to-orange-500 h-screen rounded-3xl p-4 m-4'>
        <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDJmNDlkYWZiOTE2NTI5MDNlM2EzNjVjMGZiOTZhMmNjNjNiNGNkNCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/8F3bK4aq1tCo0TLkf7/giphy.gif" alt="" />
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a>
    </div>
  )
}

export default IndividualTrainINfo