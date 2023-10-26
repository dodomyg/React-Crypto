import { Button, HStack, Heading,Stack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HStack p={4}  boxShadow={'base'} justifyContent={'space-between'}  bgColor={'blackAlpha.900'}>
        <Heading  color={'gold'} textAlign={'center'} mx={20}><Link to='/'>Exchange.io</Link></Heading>
        <Stack direction={['column','row']} alignItems={'center'} justifyContent={'space-between'}>  
        <Button mr={'10'} color={'white'} variant={'unstyled'}><Link to='/'>Home</Link></Button>
        <Button mr={'10'} color={'white'} variant={'unstyled'}><Link to='/exchange'>Exchange</Link></Button>
        <Button mr={'10'} color={'white'} variant={'unstyled'}><Link to='/coins'>Coins</Link></Button>
        </Stack>
        
        
    </HStack>
  )
}

export default Header
