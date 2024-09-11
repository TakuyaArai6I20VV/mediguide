import React from 'react'
import { auth } from './firebase'
import Image from 'next/image'

function SidebarIcon() {
  return (
    <div>
      {auth ? (
        <div className='SidebarIcon'>
          <a href='/'>
            <h1 className='text-3xl py-3 text-white'>MediGuide</h1>
          </a>
            <div className='flex items-center justify-center'>
              {auth.currentUser?.photoURL && (
                <Image src={auth.currentUser.photoURL} alt="" width={100} height={100} />
              )}
            </div>
            <p>{auth.currentUser?.email}</p>
        </div>
      ): (
        <div></div>
      )}
    </div>
  )
}

export default SidebarIcon