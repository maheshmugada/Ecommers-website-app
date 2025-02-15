"use client"
import { Box, Image, Text } from "@mantine/core"
import { useEffect, useState } from "react"

function Api() {
    const [value, setValue] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            let data:any = await fetch("https://fakestoreapi.com/products")
            data = await data.json()
            setValue(data)
            
           
        }
        fetchData()
    }, []) 
    return (
     <Box style={{ display: 'flex',justifyContent: 'space-around',flexWrap: 'wrap', gap: '20px' }}>
        {value.map((item:any) => (
            <Box style={{border: '0.2px solid #C5C6C7',gap: '20px', borderRadius: '10px'}}>
                <Box style={{}}>
                    <Image src={item.image} alt="Picture of the author" style={{ width: '200px', height: '200px', objectFit: 'contain'}}/>
                    <Text style={{ fontWeight: 'bold', marginTop: '20px', marginBottom: '20px', textAlign: 'center', width: '200px' }}>{item.title}</Text>
                    <Text style={{ fontWeight: 'bold', marginTop: '20px', marginBottom: '20px', textAlign: 'center', width: '200px' }}>{item.price}</Text>
                </Box>
            </Box>
        ))}
     </Box>
    )
}

export default Api