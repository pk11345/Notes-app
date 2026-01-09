import React from 'react'
import SideNav from './SideNav'

import Recap from './Recap'
import MiddleBox from './MiddleBox'

const Dashboard = () => {
  return (
    <>
    <div className='bg-slate-900 h-screen flex  gap-4 p-3 overflow-hidden'>
      <SideNav/>
      <MiddleBox/>
      <Recap/>
    </div>
    </>
  )
}

export default Dashboard