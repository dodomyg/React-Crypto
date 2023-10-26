import { Box, Button, FormControl, FormLabel, HStack, Heading, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import {useTypewriter,Cursor} from "react-simple-typewriter"


const Login = () => {

    const navigate = useNavigate();

    const handleButtonClick = () => {
      
      navigate('/');
    };

    const [headingg]  = useTypewriter({
      words:['Exchange.io','Wp2 Mini Project'],
      loop:{},
      typeSpeed:120,
      deleteSpeed:70,
  })

    

  return (


    <VStack  p={1} w={'full'} alignItems={'center'}>
        <Heading  color={'goldenrod'} pt={[8,5]}>Welcome back to <span>{headingg}</span><Cursor/></Heading>
        <Box w={["full","md"]}  p={[8,10]} mt={[20,"10vh"]} mx={'auto'} border={['none','1px']} borderColor={['','gray.300']} borderRadius={10}>
        <VStack spacing={4} align={'flex-start'} w={'full'}>
            <VStack spacing={1} align={['flex-start','center']} width={'full'}>
                <Heading>Login</Heading>
            </VStack>

            <FormControl>
                <FormLabel>Email</FormLabel>
                <Input rounded={'none'} variant={'filled'} type='email' />
            </FormControl>
            <FormControl>
                <FormLabel>Password</FormLabel>
                <Input rounded={'none'} variant={'filled'} type='password'/>

            </FormControl>
            <HStack justifyContent={'space-between'} w={'full'} align={'center'}>
                    <span>Dont have an account?</span>
                    <Button  colorScheme='white' variant={'ghost'}><Link to='/register'>SignUp</Link></Button>
            </HStack>
       <Button onClick={handleButtonClick}  rounded={'none'} bgColor={'goldenrod'} color={'white'} colorScheme='yellow' w={['full']}>Login</Button>
        </VStack>

    </Box>
    </VStack>
  )
}

export default Login