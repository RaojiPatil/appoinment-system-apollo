import React from 'react'
import "./landingpage.css"
export const Landingpage = () => {
// const handleclick = () => {
//     window.location.href="./Bookingpage.jsx"
// }

  return (
    <div className='maindiv'>

        <div>
           <h1 className='heading'>Welcome To Apollo Hospital</h1>
        </div>
        <div>
            <button className='appoinmentbtn'>Book Your Appoinment</button>
        </div>

        <div>
            <h1>Book Your Appoinment with our best Doctors</h1>
        </div>

        <div className='landginpagedoctor'>
            <div className='doctor1'>

<img  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRvY3RvcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
<h4>Dr: Om Patil</h4>
            </div>
            <div className='doctor2'>
<img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdG9yc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
<h4>Dr: larry jemms</h4>
            </div>
            <div className='doctor3'>
<img src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZG9jdG9yc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
<h4>Dr: petter pit</h4>
            </div>
        </div>
    </div>
    
  )
}
