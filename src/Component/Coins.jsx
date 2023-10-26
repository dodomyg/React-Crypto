import React, { useEffect, useState } from 'react'
import axios from "axios"
import {link} from "../index"
import { Button, Container, HStack, Radio, RadioGroup } from '@chakra-ui/react'
import Loader from './Loader'
import ErrorHandling from './ErrorHandling'
import CoinCard from './CoinCard'

const Coins = () => {


    const [coins,setCoins]=useState([])
    const [loading,setLoading]=useState(true)
    const [error,setErr]=useState(false)
    const [page,setPage]=useState(1)
    const[curreny,setCurrency]=useState("inr")
  
 
    const currencySymbol = curreny==="inr" ? "₹": "$"



    useEffect(()=>{

        const fetchCoins = async()=>{
           try{
            const {data} =await  axios.get(`${link}/coins/markets?vs_currency=${curreny}&order=market_cap_desc&page=${page}`)



            
            setCoins(data);
            setLoading(false)

           }catch(error){
            setLoading(false)
            setErr(true)
           }
        }

    
        fetchCoins()



    },[curreny,page])


    const btns= new Array(132).fill(1)


    if(error)
    return <ErrorHandling message={"Due to Error Coins couldnt be fetched."}/>

    const changePage=(page)=>{
      setPage(page);
      setLoading(true)
    }



  return (
    <Container color={'black'} bgColor={'whiteAlpha.900'} maxW={'container.xl'}>

        {loading? <Loader/> : 
        <>


        <RadioGroup value={curreny} onChange={setCurrency} p={'8'}>
          <HStack spacing={4} key={""}>
            <Radio value={'inr'}>INR ₹</Radio>
            <Radio value={'usd'}>USD $</Radio>
 
          </HStack>
        </RadioGroup>
        
        <HStack wrap={'wrap'} justifyContent={"space-evenly"}>

            {

                coins.map(i=>(
                    <CoinCard id={i.id} price={i.current_price} currencySymbol={currencySymbol}  key={i.key} name={i.name} img={i.image} symbol={i.symbol} url={i.url}  />
                ))


            }
        </HStack>
        <HStack width={'full'} overflowX={'auto'} p={'8'}>
        {btns.map((item,index)=>(
          <Button key={index} bgColor={'goldenrod'} onClick={()=>changePage(index+1)}>{index+1}</Button>
        ))}
        </HStack>
        
        
        
        </> }

    </Container>
  )
}



export default Coins
