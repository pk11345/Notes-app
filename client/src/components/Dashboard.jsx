import React from 'react'
import SideNav from './SideNav'
import AllNotes from './AllNotes'
import Recap from './Recap'

const Dashboard = () => {
  return (
    <>
    <div className='bg-slate-900 min-h-screen flex gap-4  p-3'>
      <SideNav/>
      <AllNotes/>
      <Recap/>
    </div>
    </>
  )
}

export default Dashboard