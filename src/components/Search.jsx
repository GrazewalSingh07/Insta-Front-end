import { InputGroup,Input, InputLeftElement, InputRightElement, Container } from '@chakra-ui/react'
import React from 'react'
import {BsPlusSquare,BsSearch,BsFillSuitHeartFill} from "react-icons/bs"

export const Search = () => {
    const [search,setsearch]=useState("")
    const handleSearch=(e)=>{

        setsearch(e.target.value)
        
    }
  
  return (
        <Container>
            <InputGroup >
                <InputLeftElement
                pointerEvents='none'
                color='gray.300'
                fontSize='1.2em'
                children={!search?<BsSearch/>:null}
                />
                <Input  value={search} onChange={handleSearch}  background="#EFEFEF" variant="ghost" placeholder="Search" />
                <InputRightElement children={search?<BsFillXCircleFill onClick={()=>{setsearch("")}} />:null}/>
            </InputGroup>
        </Container>
  )
}
