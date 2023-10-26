import React from 'react'
import { Link } from 'react-router-dom'
import { VStack,Image,Heading,Text} from '@chakra-ui/react'

const CoinCard = ({id,name,symbol,rank,img,price,currencySymbol="₹"}) => {
  return (
    <Link to= {`/coins/${id}`} >
        <VStack w={"52"} shadow={'lg'} p={8} borderRadius={'lg'} transition={'all 0.4s'} m={"4"}
        

        css={{
            "&:hover":{
                transform:"scale(1.1)"
            }
        }}
        >
          
            <Image src={img} w={"10"} h={"10"} objectFit={'contain'} alt={name}/>
            <Heading noOfLines={1} size={'md'}>{symbol}</Heading>
            <Text noOfLines={1}>{name}</Text>
            <Text noOfLines={1}>{price ? `Price: ${currencySymbol} ${price}` : "NA"}</Text>
            
        </VStack>

    </Link>
  )
}

export default CoinCard
