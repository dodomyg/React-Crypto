import { Box, Spinner, VStack } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
   <VStack h='90vh' justifyContent={'center'} alignItems={'center'}>
    <Box transform={"scale(2.5)"}>
      <Spinner size={'xl'} thickness='4px' emptyColor='gray.200' >
       
      </Spinner>

    </Box>

   </VStack>
  )
}

export default Loader
