"use client"
import { Box, Text } from '@mantine/core'
import React, { useEffect, useState } from 'react'

const cart = () => {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      let data:any = await fetch("'https://fakestoreapi.com/products/1")
      data = await data.json()
      setCart(data)
    }
    fetchData()
  })
  return (
    <Box>
       {
        cart.map((item:any) => (
          <Box>
            <Text>{item.title}</Text>
            <Text>{item.price}</Text>
          </Box>
        ))
       }
    </Box>
  )
}

export default cart
