import React from 'react'

function Card({username}) {
  
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md ">
    <img
      src="https://via.placeholder.com/300x200" 
      alt="Card Image" 
      className="rounded-t-lg w-full h-48 object-cover"></img>
    <div class="p-5">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{username}</h5>
      <p className="mb-4 text-gray-700">This is a description of the card. Add relevant details here.</p>
      <button 
        className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300">
        Learn More
      </button>
    </div>
  </div>
  )
}

export default Card