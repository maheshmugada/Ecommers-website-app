"use client"
import { Box, Button, Image, Text } from "@mantine/core"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

function Api() {
    const [value, setValue] = useState([])
    const router = useRouter()
    useEffect(() => {
        const fetchData = async () => {
            let data:any = await fetch("https://fakestoreapi.com/products")
            data = await data.json()
            setValue(data)
            
           
        }
        fetchData()
    }, []) 

    const handleClick = (item:any) => {
        console.log(item)
    }
    return (
     <Box style={{ display: 'flex',justifyContent: 'space-around',flexWrap: 'wrap', gap: '20px',marginTop: '60px' }}>
        {value.map((item:any) => (
            <Box style={{border: '0.2px solid #C5C6C7',gap: '20px', borderRadius: '10px'}} onClick={()=>handleClick(item)}>
                <Box style={{width: '300px',height: '400px', paddingLeft: '40px',paddingTop: '20px'}}>
                    <Image src={item.image} alt="Picture of the author" style={{ width: '200px', height: '200px', objectFit: 'contain'}}/>
                    <Text style={{ fontWeight: 'bold',fontSize: '16px', marginTop: '20px', marginBottom: '20px', textAlign: 'center', width: '200px' }}>{item.title}</Text>
                    <Text style={{ fontWeight: 'bold', marginTop: '20px', marginBottom: '20px', textAlign: 'center', width: '200px' }}>{item.price}</Text>

                </Box>
                <Button style={{margin: '50px', width: '200px', }} onClick={() => router.push(`/cart/${item.id}`)}>Add to Cart</Button>
            </Box>
        ))}
     </Box>
    )
}

export default Api