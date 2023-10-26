import { Box, Container,Radio,HStack,RadioGroup, VStack, Text, Center, Image, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Badge, Progress } from '@chakra-ui/react'
import React,{useEffect, useState} from 'react'
import Loader from './Loader'
import axios from 'axios'
import {link} from "../index"
import { useParams } from 'react-router-dom'
import ErrorHandling from './ErrorHandling'
import Chart from './Chart'


const CoinsInfo = () => {

  const [coins,setCoins]=useState([])
  const [loading,setLoading]=useState(true)
  const [error,setErr]=useState(false)
  const [page,setPage]=useState(1)
  const[curreny,setCurrency]=useState("inr")


  const [days,setDays]=useState("24h")
  const [chartArray,setChartArray]=useState([])

  const parmas = useParams()


  useEffect(()=>{

    const fetchCoinData =async()=>{
      try{

      const {data} = await  axios.get(`${link}/coins/${parmas.id}`)

      const {data:chartData} = await axios.get(`${link}/coins/${parmas.id}/market_chart?vs_currency=${curreny}&days=${days}`)

      console.log(chartData);
      setChartArray(chartData?.prices)
      setCoins(data)
      setLoading(false)



      }catch(error){
        setErr(true)
        setLoading(false)
      }

      

    }
    fetchCoinData();

  },[parmas.id])

  if(error)return <ErrorHandling message={"The data for this coin could not be fetched"} />;


  const currencySymbol = curreny==="inr" ? "₹": "$"




  return (
    <Container  color={'black'} bgColor={'whiteAlpha.900'} maxW={"container.xl"}>
      {
        loading ? <Loader/>  :
        (
          <>
          
          <Box borderWidth={1} w={'full'}>
              <Chart arr={chartArray} currency={currencySymbol} days={days} />
          </Box>

          <RadioGroup value={curreny} onChange={setCurrency} p={'8'}>
          <HStack spacing={4} key={""}>
            <Radio value={'inr'}>INR ₹</Radio>
            <Radio value={'usd'}>USD $</Radio>
 
          </HStack>
        </RadioGroup>

        <VStack spacing={4} padding={'16'} alignItems={'flex-start'}>

          <Text fontSize={'small'} alignSelf={'center'}>
            Last Updated on : {Date().split("G")[0]} 
          </Text>
          <Badge fontSize={'2xl'} bgColor={'blackAlpha.700'} color={'white'}>
            {`#${coins.market_cap_rank}`}
          </Badge>
          <Image src={coins.image.large} w={'16'} h={'16'} objectFit={'contain'}  />
          <Stat>
            <StatLabel>{coins.name}</StatLabel>
            <StatNumber>{currencySymbol + " "}{coins.market_data.current_price[curreny]}</StatNumber>
            <StatHelpText>
              <StatArrow type={coins.market_data.price_change_percentage_24h > 0 ? 'increase':'decrease' } />
              {coins.market_data.price_change_percentage_24h} %
            </StatHelpText>
          </Stat>
          
          <CoinDetails high={coins.market_data.high_24h[curreny]} low={coins.market_data.low_24h[curreny]} />

          <Box w={'full'} padding={4}>
              <Item title={"Market Cap Change in 24 Hours"} value={coins.market_data.market_cap_change_percentage_24h} />
              <Item title={"All time low"} value={coins.market_data.atl[curreny]} />
              <Item title={"All time high"} value={coins.market_data.ath[curreny]} />
          </Box>

        </VStack>
          
          </>
        )
        
        }

    </Container>
  )
}

const Item = ({title,value})=>(

<HStack bgColor={'lightgray'} justifyContent={'space-between'} w={'full'} p={4} my={4}>
  <Text>{title}</Text>
  <Text>{value}</Text>
</HStack>


)



const CoinDetails=({high,low})=>(


  <VStack w={'full'}>
    <Progress value={50} colorScheme={'telegram'} w={'full'} />
    <HStack justifyContent={'space-between'} w={'full'}>

      <Badge children={low} colorScheme={'red'}/>
      <Text>24 Hr change</Text>
      <Badge children={high} colorScheme={'teal'}/>

      

    </HStack>

  </VStack>


);

export default CoinsInfo;
