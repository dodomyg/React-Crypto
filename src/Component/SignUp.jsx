import { Box, Button, FormControl, FormLabel, HStack, Heading, Input, VStack } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {useTypewriter,Cursor} from "react-simple-typewriter"


const SignUp = () => {
   const navigate = useNavigate()


    const [data,setData]=useState({
        username:"",
        email:"",
        password:"",
    })

    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const [headingg]  = useTypewriter({
        words:['Exchange.io','Wp2 Mini Project'],
        loop:{},
        typeSpeed:120,
        deleteSpeed:70,
    })

    const submitForm=(e)=>{
        e.preventDefault()
       const  formData={
            username:data.username,
            email:data.email,
            password:data.password,
        }

        axios.post("Link",formData).then((result)=>{
            if(result.data.status==="Invalid"){
                alert("Invalid User")
            }else{
                navigate('/')
            }
        })



    }

  return (

    <VStack p={1} w={'full'} alignItems={'center'}>
<Heading  color={'goldenrod'} pt={[8,5]}>Welcome to <span>{headingg}</span><Cursor/></Heading>
        <Box w={["full","md"]}  p={[8,10]} mt={[5,"10vh"]} mx={'auto'} border={['none','1px']} borderColor={['','gray.300']} borderRadius={10}>
         
         <VStack spacing={4} align={'flex-start'} w={'full'}>
            
             <VStack spacing={1} align={['flex-start','center']} width={'full'}>
                 <Heading>Sign Up</Heading>
             </VStack>
             <form style={{width:"100%"}}>
             <FormControl>
                 <FormLabel>Username</FormLabel>
                 <Input onChange={handleChange} value={data.username} rounded={'none'} variant={'filled'} type='text' />
             </FormControl>
 
             <FormControl>
                 <FormLabel>Email</FormLabel>
                 <Input onChange={handleChange} value={data.email} rounded={'none'} variant={'filled'} type='email' />
             </FormControl>
             <FormControl>
                 <FormLabel>Password</FormLabel>
                 <Input onChange={handleChange} value={data.password} rounded={'none'} variant={'filled'} type='password'/>
 
             </FormControl>
             <HStack justifyContent={'space-between'} w={'full'} align={'center'}>
                     <span>Already have an account?</span>
                     <Button  colorScheme='white' variant={'ghost'}><Link to='/login'>Login</Link></Button>
             </HStack>
        <Button  type='submit' rounded={'none'} bgColor={'goldenrod'} color={'white'} colorScheme='yellow' w={['full']}>Sign Up</Button>
        </form>
         </VStack>
 
     </Box>
    </VStack>
  )
}

export default SignUp