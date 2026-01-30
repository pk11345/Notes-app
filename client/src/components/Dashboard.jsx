import React from 'react'
import SideNav from './SideNav'

import Recap from './Recap'
import MiddleBox from './MiddleBox'

const Dashboard = () => {
  return (
    <>
    <div className='bg-slate-900 min-h-screen flex flex-col md:flex-row gap-4 p-2 md:p-3 overflow-y-auto'>
      <SideNav/>
      <MiddleBox/>
      <Recap/>
    </div>
    </>
  )
}

export default Dashboard