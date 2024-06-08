import React from 'react'
import Login from '@/components/Login'
import Home from '@/components/Home'

import { useAppContext } from '@/statemanagment/context'

function page() {
  const {state}:any=useAppContext()
  return (
    <div>
      {
        state?.isLoggedIn?<Home/>:<Login/>
      }
    </div>
  )
}

export default page