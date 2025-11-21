import React from 'react'

const Signup = () => {
  return (
    <>
     <div className='w-[100%]'>
      <form className='flex flex-col  gap-4 w-[100%]'>

        <div className='flex flex-col gap-2 '>
          <h1 className='text-white text-xl font-semibold'>Name</h1>
          <input className='p-2 bg-slate-800/70 rounded-lg placeholder:text-white
           placeholder:font-semibold outline-none text-white font-semibold border-[1px] border-blue-400'
           type="text" placeholder='Enter Your Email' />
        </div>

        <div className='flex flex-col gap-2 '>
          <h1 className='text-white text-xl font-semibold'>Email</h1>
          <input className='p-2 bg-slate-800/70 rounded-lg placeholder:text-white
           placeholder:font-semibold outline-none text-white font-semibold border-[1px] border-blue-400'
           type="email" placeholder='Enter Your Email' />
        </div>

        <div className='flex flex-col gap-2 '>
          <h1 className='text-white text-xl font-semibold'>Password</h1>
          <input className='p-2 bg-slate-800/70 rounded-lg placeholder:text-white
           placeholder:font-semibold outline-none text-white font-semibold border-[1px] border-blue-400'
           type="password" placeholder='Enter Your Password' />
        </div>
        
        <div>
          <button className='w-[100%] bg-blue-400 text-white text-xl font-semibold p-2 rounded-lg outline-none'>
            Create Account
          </button>
        </div>
      </form>
    </div>
    </>
  )
}

export default Signup