import { HStack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import {BsFillHeartFill} from "react-icons/bs"
import {FaRegComment} from "react-icons/fa"
export const ProfilePost = ({likes=0,comments=0}) => {
    const [visible,setVisible]=useState(false)
  return (
    <HStack     backgroundColor={visible?"blackAlpha.400":null} onMouseEnter={()=>{
        setVisible(true)
     }} onMouseLeave={()=>{
        setVisible(false)
     }}  spacing={10} p="6rem">
       <HStack spacing={2} visibility={visible?"visibe":"hidden"} >
        <Text fontWeight={700} fontSize="larger" color="white">{likes}</Text>
        <BsFillHeartFill color="white"  fontSize="2rem"   />
       </HStack>
       <HStack spacing={2} visibility={visible?"visibe":"hidden"}>
        <Text fontWeight={700} fontSize="larger" color="white">{comments}</Text>
        <FaRegComment color="white" fontSize="2rem"   />
       </HStack>
       
     </HStack>
  )
}
