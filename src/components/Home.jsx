import { Container } from "@chakra-ui/react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getPost } from "../Redux/Post/action"

export const Home=()=>{
    const dispatch=useDispatch()
    
    useEffect(()=>{
        dispatch(getPost())
    },[])
    return <Container maxW="container.xl">
            Hi
    </Container>
}