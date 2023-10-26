import { Box, Image, VStack } from '@chakra-ui/react'
import React from 'react'
import {motion} from "framer-motion"

const Home = () => {
  return (
   <Box bgColor={'blackAlpha.900'} w={'full'} h={'85vh'} >

    <VStack bgColor={'blackAlpha.900'} w={'full'} h={'75vh'}  >
    <motion.div style={{height:"80vh"}} animate={{
      translateY:"20px"
    }}
    transition={{
      duration:2,
      repeat:Infinity,
      repeatType:'reverse'
    }}>
    <Image w={'90%'}  h={'full'} objectFit={'cover'}  src={'https://source.unsplash.com/1600x900/?crypto'} alt='gg' filter={"grayscale(1)"}/>
            
    </motion.div>

    
    </VStack>
   </Box>
  )
}

export default Home
