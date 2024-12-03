import React, { useEffect, useState } from 'react'

function Instagram() {
    const [data,setData]=useState([])
    useEffect(() => {
        fetch('https://graph.instagram.com/me?fields=id,username,followers_count&access_token=YOUR_ACCESS_TOKEN')
    .then(response=>response.json())
    .then( data=>{
        console.log(data)
        setData(data)
    })
      }, [])
    
  return (
    <div className= ' text-center bg-slate-700 text-white'>instagram Follower:1103{data.followers_count}
    <img className='w-90 h-60' src="https://plus.unsplash.com/premium_photo-1675730349200-21b810ea0442?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D.jpg
    " alt="" />
    </div>
  )
}

export default Instagram