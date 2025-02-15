"use client"
import React from 'react'
import Navbar from '@/components/Navbar/page'
import InputBox from '@/components/InputBox/page'
import Api from '@/components/Api/page'

function Landing() {

  return (
      <>
      <Navbar/>
      <div style={{ display: 'flex', justifyContent: 'space-around', gap: '20px' }}>
      <InputBox/>
      <Api/>
        </div>
      </>
      
  )
}

export default Landing
