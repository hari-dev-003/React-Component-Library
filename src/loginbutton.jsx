import React from 'react'

const Loginbutton = () => {
 const handleclick=()=>{
    window.alert("This is an alert to ensure that button is working")
  }
  return (
    <>
    {/* Here I have added margin for the button (ml-80)*/}
    <button className='w-20 h-10 rounded-2xl bg-blue-700 hover:scale-110
    ml-80 scroll-smooth text-white' onClick={()=>handleclick()}>Login</button>
    </>



  )
}

export default Loginbutton