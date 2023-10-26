import React, { useEffect, useState } from 'react'
import axios from "axios"
import {link} from "../index"
import { Container, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react'
import Loader from './Loader'
import ErrorHandling from './ErrorHandling'

const Exchanges = () => {


    const [coins,setCoins]=useState([])
    const [loading,setLoading]=useState(true)
    const [error,setErr]=useState(false)



    useEffect(()=>{

        const fetchExchange = async()=>{
           try{
            const {data} =await  axios.get(`${link}/exchanges`)



            
            setCoins(data);
            setLoading(false)

           }catch(error){
            setLoading(false)
            setErr(true)
           }
        }

    
        fetchExchange()



    },[])


    if(error)
    return <ErrorHandling message={"Due to Error coins could not be exchanged."}/>




  return (
    <Container maxW={'container.xl'}>

        {loading? <Loader/> : 
        <>
        
        <HStack wrap={'wrap'} justifyContent={'space-evenly'}>

            {

                coins.map(i=>(
                    <ExChnageCard key={i.key} name={i.name} img={i.image} rank={i.trust_score_rank} url={i.url}  />
                ))


            }
        </HStack>
        
        
        
        </> }

    </Container>
  )
}

const ExChnageCard=({name,img,rank,url})=>(


    <a href={url} target={"blank"}>
        <VStack w={"52"} shadow={'lg'} p={8} borderRadius={'lg'} transition={'all 0.4s'} m={"4"}
        

        css={{
            "&:hover":{
                transform:"scale(1.1)"
            }
        }}
        >
            <Image src={img} w={"10"} h={"10"} objectFit={'contain'} alt={name}/>
            <Heading noOfLines={1} size={'md'}>{rank}</Heading>
            <Text>{name}</Text>
        </VStack>

    </a>
)

export default Exchanges
