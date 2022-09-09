import { Box, Button, Container,Divider,HStack,Image,Input, InputGroup, InputLeftElement, InputRightElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure } from "@chakra-ui/react"
import {HiHome} from "react-icons/hi"
import 'antd/dist/antd.css';
import {RiMessengerLine} from "react-icons/ri"
import {BsPlusSquare,BsSearch,BsFillSuitHeartFill} from "react-icons/bs"
import {MdOutlineExplore} from "react-icons/md"
import {AiOutlineHeart} from "react-icons/ai"
import {IoIosSettings} from "react-icons/io"
import {CgProfile} from "react-icons/cg"
import{GoReport} from "react-icons/go"
 import {FaRegBookmark} from "react-icons/fa"
import {BsFillXCircleFill,BsEmojiSmileFill} from "react-icons/bs"
import { useEffect, useState } from "react"
 import {IoIosImages} from "react-icons/io"
import {AiOutlineUserSwitch} from "react-icons/ai"
import { Dropdown, Menu } from "antd";
import { useRef } from "react";
import { FileUploader } from "react-drag-drop-files";
 import {FaClosedCaptioning} from "react-icons/fa"
 import Picker from 'emoji-picker-react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPost } from "../Redux/Post/action";
import Search from "antd/lib/transfer/search";
import { getAllUser, getUser } from "../Redux/search/action";
const OverlayTwo = () => (
    <ModalOverlay
      bg='none'
      backdropFilter='auto'
      backdropInvert='80%'
      backdropBlur='2px'
    />
  )

export const Navbar=()=>{
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const user= useSelector((state)=>state.SearchReducer.users)
    const [droppedFiles,setDroppedfile]=useState(null)
    const [caption,setCaption] =useState("")
     const [captionPage,SetcaptionPage]=useState(false)
    const [data,setPostdata]=useState(null)
    const profileDropDown= useRef()
    const currprofile= JSON.parse(sessionStorage.getItem("user"))
    const SearchDropDown =useRef()
     const [imagePreview, setImagePreview]= useState("")
    const fileInput= useRef()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [showEmoji,setshowEmpji]=useState(false)


    const [overlay, setOverlay] = useState(<OverlayTwo />)
    const [inputActive,setInputActive] = useState(false)
    const notify=[{"id":1,"message":"X liked your photo","time":"just now"},
    {"id":3,"message":"Z liked your photo","time":"just now"},{"id":2,"message":"Y liked your photo","time":"just now"}]
    const [search,setsearch]=useState("")
    const handleSearch=(e)=>{

        setsearch(e.target.value)
     
    }

    useEffect(()=>{
        if(search){
            dispatch(getUser(search))
        }
       else{
        dispatch(getAllUser())
       }
    },[search])
    console.log(search)

  const handleDropFile = (file) => {
    setDroppedfile(file)
   
    setPostdata(file)
  
 var path = (window.URL || window.webkitURL).createObjectURL(file);
 
        setImagePreview(path)
  }
    const notifications = (
         <Box overflow="scroll" boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" width="25rem" backgroundColor="white" >
            {notify?.map((el)=>{
                return<HStack  _hover={{backgroundColor:"whitesmoke"}} cursor="pointer" p="1rem">
                    <BsFillSuitHeartFill fontSize="1.5rem" color="red"/>
                    <Stack pl="1rem">
                        <Text ><b>{el.message}</b></Text>
                        <Text>{el.time}</Text>
                    </Stack>
                </HStack>
            })}
         </Box>
      );
      const profile = (
        <Box  boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" width="15rem" backgroundColor="white" >
            <Stack>
                <Button _hover={{backgroundColor:"whitesmoke"}} borderRadius="none" cursor="pointer" justifyContent="left" variant="ghost" p="1rem" fontWeight={400}  leftIcon={<CgProfile/>}  onClick={()=>{
                   profileDropDown.current.click()
                    navigate(`/${JSON.parse(sessionStorage.getItem("user")).username}`)
                }} >Profile</Button>
                <Button _hover={{backgroundColor:"#EFEFEF"}} borderRadius="none" cursor="pointer" justifyContent="left"    variant="ghost" p="1rem" fontWeight={400} leftIcon={<FaRegBookmark/>} >Saved</Button>
                <Button _hover={{backgroundColor:"#EFEFEF"}}  borderRadius="none"cursor="pointer" justifyContent="left"  variant="ghost" p="1rem" fontWeight={400}  leftIcon={<IoIosSettings/>} >Setting</Button>
                <Button _hover={{backgroundColor:"#EFEFEF"}}  borderRadius="none" cursor="pointer"justifyContent="left"  variant="ghost" p="1rem" fontWeight={400}  leftIcon={<GoReport/>} >Report a Problem</Button>
                <Button _hover={{backgroundColor:"#EFEFEF"}} borderRadius="none" cursor="pointer" justifyContent="left"       variant="ghost" p="1rem" fontWeight={400}  leftIcon={<AiOutlineUserSwitch/>} >Switch Accounts </Button>
                <Divider/>
                <Button  _hover={{backgroundColor:"#EFEFEF"}} borderRadius="none" cursor="pointer" justifyContent="left"   variant="ghost" p="1rem"  fontWeight={400}  >Log out</Button>
            </Stack>
        </Box>
      );
    const SearchData=(
        <Box   height="20rem" overflow="scroll"  boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" width="20rem" backgroundColor="white" >
        <Stack >
           {user?.map((el)=>{
           return <HStack onClick={()=>{
            SearchDropDown.current.click()
            navigate(`/${el.username}`)
           }}  spacing={6}  _hover={{ background:"#EFEFEF" }} cursor="pointer"  p="1rem">
                 <Image width="2rem" borderRadius="50%" src={profile?.avatar?profile?.avatar:"https://dreamvilla.life/wp-content/uploads/2017/07/dummy-profile-pic.png"}/>
                 <Text fontSize="large">{el.username}</Text>
           </HStack>
           })}
        </Stack>
    </Box>
        )

    const handleFileButtonClick=()=>{
       
          fileInput.current.click()
     }
     
   const handleImageUpload=(e)=>{
  
    setPostdata(e.target.files[0])
  
    var path = (window.URL || window.webkitURL).createObjectURL(e.target.files[0]);
 
        setImagePreview(path)
 
   }
const OpenCaptionPage=()=>{
    if(!imagePreview){
        alert("PLease add an image")
        return
    }
    SetcaptionPage(true)
}
const handlePost=()=>{
    dispatch(createPost({caption,file:data}))
    console.log()
}
   
const onEmojiClick = (event, emoji) => {
    let temp= caption
    temp+=emoji.emoji
    setCaption(temp);
  };
  

  
    return <Container p={5} maxW="container.2xl" borderBottom="1px solid"  >

        <Container  margin="auto"  maxW="container.xl">
            <HStack margin="auto" width="80%"  spacing="auto">
            <Stack >
              <Image width="60%" src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"/>

            </Stack>
            <HStack spacing={10}>
                <Dropdown placement="bottom" overlay={SearchData} trigger={'click'}>
                <InputGroup >
                    <InputLeftElement
                    pointerEvents='none'
                    color='gray.300'
                    fontSize='1.2em'
                    children={!search?<BsSearch/>:null}
                    />
                    <Input ref={SearchDropDown}  value={search} onChange={handleSearch}  background="#EFEFEF" variant="ghost" placeholder="Search" />
                    <InputRightElement children={search?<BsFillXCircleFill onClick={()=>{setsearch("")}} />:null}/>
                </InputGroup>
                </Dropdown>
               
  
                <HStack spacing={2}>
                    <Button onClick={()=>navigate("/dashboard")} fontSize="x-large" variant="unstyled"><HiHome/></Button>
                    <Button fontSize="x-large" variant="unstyled"><RiMessengerLine/></Button>
                    <Button onClick={() => {
                            setOverlay(<OverlayTwo />)
                            onOpen()
                            }} fontSize="x-large" variant="unstyled"><BsPlusSquare/></Button>
                    <Button fontSize="x-large" variant="unstyled"><MdOutlineExplore/></Button>

                    <Dropdown placement="bottomRight" overlay={notifications} trigger={'click'}>
                         <Button fontSize="x-large" variant="unstyled"><AiOutlineHeart/></Button>
                    </Dropdown>
                    <Dropdown placement="bottomRight" overlay={ profile} trigger={'click'}>
                            <Button ref={profileDropDown}  fontSize="x-large" variant="unstyled"><CgProfile/></Button>
                    </Dropdown>
                </HStack>
            </HStack>
           
          
            </HStack>
          
            
        </Container>

        <Modal size="2xl"  isCentered isOpen={isOpen} onClose={()=> 
            {
                setPostdata(null)
                setImagePreview("")
                setDroppedfile(null)
                setCaption("")
                SetcaptionPage(false)
                onClose()
            }
            }>
             {overlay}
        <ModalContent   margin="auto" >
            <ModalHeader>Create New Post</ModalHeader>
               <ModalCloseButton />
            <Divider/>
            <Button _hover={{background:"black"}} onClick={OpenCaptionPage} background="black" color="white" borderRadius="none">Next</Button>
           {captionPage?<ModalBody>
            <InputGroup m="1rem">
                <InputLeftElement children={<FaClosedCaptioning/>}/>
                <Input value={caption} onChange={(e)=>{
                        setCaption(e.target.value)
                }} placeholder="Write caption"/>
                <InputRightElement onClick={()=>{
                    setshowEmpji(!showEmoji)
                }}  children={<BsEmojiSmileFill/>}/>
            </InputGroup>
            {showEmoji?<Picker pickerStyle={{width:"100%"}} onEmojiClick={onEmojiClick}/>:null}
             <Image p="1rem" width="100%" height="100%" src={imagePreview}/>
             <Button onClick={handlePost} borderRadius="none" variant="outline" m="1rem" width="100%">Post</Button>
           </ModalBody>: <ModalBody  fontSize="10rem"    p="10rem" margin="auto"  >

                    <>
                    {!imagePreview?
                    <Stack  p="2rem" margin="auto" textAlign="center" alignItems="center" >
                       
                     <IoIosImages  />
                     <FileUploader  handleChange={handleDropFile} name="file"  type="file" />
                    <Text  p="1rem"  fontSize="large">Drag photos and videos here</Text>
                    <Button onClick={handleFileButtonClick} colorScheme="blue">Select from computer</Button>
                    <Input opacity={0}  type="file"  accept="image/png"   ref={fileInput} onChange={handleImageUpload} />
                    
                    </Stack>:<Stack>
                   
                         <Image width="100%" height="100%" src={imagePreview}/>
                         <Button onClick={()=>{
                            setImagePreview("")
                            setPostdata(null)
                           
                         }} colorScheme="blue">Change Image</Button>
                         
                    
                    </Stack>}
                    </>
                    
                   
            </ModalBody>}
             
        </ModalContent>
      </Modal>
    </Container>
}
