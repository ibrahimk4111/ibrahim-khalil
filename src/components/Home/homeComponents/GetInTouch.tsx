import React from 'react'

const GetInTouch = () => {
  return (
    <div className=''>
        <h1 className=' text-2xl text-center text-white '>Get <span className=' font-bold'>In Touch</span></h1>
        <div>
          <form action="submit" >
            <input type=" text " placeholder='Your Name' className=' placeholder:text-white '/>
          </form>
        </div>
        <div></div>
    </div>
  )
}

export default GetInTouch