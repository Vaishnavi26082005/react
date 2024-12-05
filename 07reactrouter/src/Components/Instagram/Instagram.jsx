// import React, { useEffect, useState } from 'react';

// function Instagram() {
//   const [data, setData] = useState(null); // Initialize as null for better handling
  
//   useEffect(() => {
//     fetch('https://graph.instagram.com/me?fields=id,username,followers_count&access_token=YOUR_ACCESS_TOKEN')
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data); // Update state with the fetched data
//       })
//       .catch((error) => console.error('Error fetching Instagram data:', error)); // Handle fetch errors
//   }, []);
  
//   return (
//     <div className="text-center bg-slate-700 text-white flex flex-col text-3xl items-center p-5">
//       <div>
//         Followers: {data && data.followers_count ? data.followers_count : 'Loading...'}
//       </div>
//       <img
//         className="w-[90px] h-60"
//         src="https://plus.unsplash.com/premium_photo-1675730349200-21b810ea0442?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D.jpg"
//         alt="Instagram"
//       />
//       <p className="px-5 py-6 text-center text-sm">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptates doloribus ipsa
//         aspernatur error amet accusantium expedita corporis labore beatae dolorem blanditiis
//         accusamus.
//       </p>
//     </div>
//   );
// }

// export default Instagram;
