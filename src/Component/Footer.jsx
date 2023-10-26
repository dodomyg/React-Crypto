import { Box,Stack, Text} from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} color={'white'} minH={'48'} px={'16'}  py={["16","8"]}>
        

        <Stack alignItems={'center'} direction={["column","row"]} h={'full'} justifyContent={'space-between'}>

            
            <Text color={'white'} fontSize={['sm','large']} pb={'4'} borderBottom={'1px solid'}>The best crypto exchange app!</Text>
            <Text  color={'whiteAlpha.500'} float={'right'} fontSize={['sm']} pb={'4'} >Exchange.io All rights reserved</Text>
            

        </Stack>

    </Box>
  )
}

export default Footer
