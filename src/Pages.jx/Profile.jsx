import { Box,Button, Container, Divider, Grid, GridItem, Heading, HStack ,Image, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text} from '@chakra-ui/react'

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOthersPost, getPost } from '../Redux/Post/action'

import { useState } from 'react'
import { ProfilePost } from './ProfilePost'
 import {GrGrid} from "react-icons/gr"
 import {MdOutlineVideoCameraFront} from "react-icons/md"
import {FiSettings} from "react-icons/fi"
import {GrBookmark} from "react-icons/gr"
import {BiUserPin} from "react-icons/bi"
import { useParams } from 'react-router-dom'
import { getFollowers, getFollowing, startFollowing } from '../Redux/Connections/action'


export const Profile = () => {
    const {user_name} = useParams()
    
    const dispatch=useDispatch()
    const Mypost= useSelector((state)=>state.MyPostReducer.Mypost)
    const Myreels=null
    const saved=null
    const taggedPosts=null
    const profile=JSON.parse(sessionStorage.getItem("user"))

    const spectatingUser=JSON.parse(sessionStorage.getItem("SpectationUser"))
    const followers= useSelector((state)=>state.loginReducer.follower)
    const following= useSelector((state)=>state.loginReducer.following)
    
    const [followingNames,seFollowingNames]=useState(null)
    const [followersNames,seFollowersNames]=useState(null)
   
    useEffect(()=>{
         
       let followerstemp= followers?.map(el => {
            return el.username
        });
        let followingtemp= following?.map(el => {
            return el.username
        });
        
        seFollowingNames(followingtemp)
        seFollowersNames(followerstemp)
    },[])

    const handleFollow=()=>{
        dispatch(startFollowing(user_name))
    }

    useEffect(()=>{
        if(user_name==profile.username){
            dispatch(getFollowers())
            dispatch(getPost())
        }
        else{
            dispatch(getOthersPost(user_name))
        }
      
    },[user_name])
  
  return (
    <Container    pt="2rem" margin="auto" maxW="container.xl"  >
       {user_name==profile.username?<>
        <HStack margin="auto"  spacing={10} pl="5rem"   width="70%">
           <Stack >
                  <Image m="2rem"  height="10rem"  width="10rem" borderRadius="50%" src={profile?.avatar?profile?.avatar:"https://dreamvilla.life/wp-content/uploads/2017/07/dummy-profile-pic.png"}/>
           </Stack>
            <Stack   spacing={6}>
                <HStack spacing={6}>
                    <Heading fontWeight={300}>{profile?.username}</Heading>
                    <Button variant="outline">Edit profile</Button> 
                    <Button fontSize="2rem" variant="ghost" >{<FiSettings />}</Button>
                </HStack>
                <HStack spacing={6}>
                   <HStack>
                    <Text fontWeight={700}>{Mypost.length ?Mypost.length:0}</Text>
                    <Text  fontSize="large">posts</Text>
                   </HStack>
                   <HStack>
                    <Text fontWeight={700}>{followers?followers.length:0}</Text>
                    <Text fontSize="large">followers</Text>
                   </HStack>
                   <HStack>
                    <Text fontWeight={700}>{following?following.length:0}</Text>
                    <Text fontSize="large">following</Text>
                   </HStack>
                </HStack>
                <Text fontSize="2rem" fontWeight={700}> {profile?.fullname} </Text>
            </Stack>
        </HStack>
        <Divider/>

         <Tabs  color="black" size="lg" align="center">
            <TabList  border="none">
                <Tab   mr="1rem"   pl="1rem" pr="1rem">
                    <HStack>
                        <GrGrid/>
                        <Text>Posts</Text>
                    </HStack>
                </Tab>
                <Tab     mr="1rem"   pl="1rem" pr="1rem">
                    <HStack>
                        <MdOutlineVideoCameraFront/>
                        <Text>Reels</Text>
                    </HStack>
                </Tab>
                <Tab    mr="1rem"   pl="1rem" pr="1rem">
                    <HStack>
                        <GrBookmark/>
                        <Text>Saved</Text>
                    </HStack>
                </Tab>
                <Tab     mr="1rem"   pl="1rem" pr="1rem">
                    <HStack>
                        <BiUserPin/>
                        <Text>Tagged</Text>
                    </HStack>
                </Tab>
            </TabList>

            <TabPanels>
                <TabPanel >
                        <Box   margin="auto" >
                          <Grid gap={6}  templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)", lg: "repeat(3,1fr)" }} pt="5rem">
                        {Mypost?.map((el)=>{
                                    return <GridItem background="black" margin="auto" backgroundPosition="center"  textAlign="center"  cursor="pointer"    backgroundRepeat="no-repeat" backgroundSize="contain"   backgroundImage={el?.avatar} key={el._id}>
                                        <ProfilePost likes={5} comments={1} />
                                        
                                    </GridItem>
                                })}
                            </Grid>
                        </Box>
                </TabPanel>
                <TabPanel >
                        <Box   margin="auto" >
                        {Myreels? <Grid   templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)", lg: "repeat(3,1fr)" }} pt="5rem" gap={6}>
                        {Myreels?.map((el)=>{
                                    return <GridItem background="black" margin="auto" backgroundPosition="center"  textAlign="center"  cursor="pointer"    backgroundRepeat="no-repeat" backgroundSize="contain"   backgroundImage={el?.avatar} key={el._id}>
                                        <ProfilePost likes={5} comments={1} />
                                        
                                    </GridItem>
                                })}
                            </Grid>:<Text>No reels yet</Text>}
                        </Box>
                </TabPanel>
                <TabPanel >
                        <Box   margin="auto" >
                      {saved?  <Grid   templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)", lg: "repeat(3,1fr)" }} pt="5rem" gap={6}>
                        {saved?.map((el)=>{
                                    return <GridItem background="black" margin="auto" backgroundPosition="center"  textAlign="center"  cursor="pointer"    backgroundRepeat="no-repeat" backgroundSize="contain"   backgroundImage={el?.avatar} key={el._id}>
                                        <ProfilePost likes={5} comments={1} />
                                        
                                    </GridItem>
                                })}
                            </Grid>:<Text>No saved Post</Text>}
                        </Box>
                </TabPanel>

                <TabPanel >
                        <Box overflow="scroll"   margin="auto" >
                      { taggedPosts?  <Grid    templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)", lg: "repeat(3,1fr)" }} pt="5rem" gap={6} >
                        {taggedPosts?.map((el)=>{
                                    return <GridItem m="1rem" background="black" margin="auto" backgroundPosition="center"  textAlign="center"  cursor="pointer"    backgroundRepeat="no-repeat" backgroundSize="contain"   backgroundImage={el?.avatar} key={el._id}>
                                        <ProfilePost likes={5} comments={1} />
                                        
                                    </GridItem>
                                })}
                            </Grid>:<Text>No tagged Post</Text>}
                        </Box>
                </TabPanel>
            </TabPanels>
        </Tabs >
       </>:<>
       <HStack margin="auto"  spacing={10} pl="2rem"   width="70%">
           <Stack >
                  <Image m="2rem"  width="10rem" borderRadius="50%" src={profile?.avatar?profile?.avatar:"https://dreamvilla.life/wp-content/uploads/2017/07/dummy-profile-pic.png"}/>
           </Stack>
            <Stack   spacing={6}>
                <HStack spacing={6}>
                    <Heading fontWeight={300}>{spectatingUser?.username}</Heading>
                   {followingNames?.includes(user_name)? null:<Button variant="outline" onClick={handleFollow}>Follow</Button>}
                    <Button variant="outline">Message</Button>
                    <Button fontSize="2rem" variant="ghost" >{<FiSettings />}</Button>
                </HStack>
                <HStack spacing={6}>
                   <HStack>
                    <Text fontWeight={700}>{Mypost.length ?Mypost.length:0}</Text>
                    <Text  fontSize="large">posts</Text>
                   </HStack>
                   <HStack>
                    <Text fontWeight={700}>{followers?followers.length:0}</Text>
                    <Text fontSize="large">followers</Text>
                   </HStack>
                   <HStack>
                    <Text fontWeight={700}>{following?following.length:0}</Text>
                    <Text fontSize="large">following</Text>
                   </HStack>
                </HStack>
                <Text fontSize="2rem" fontWeight={700}> {spectatingUser?.fullname} </Text>
            </Stack>
        </HStack>
        <Divider/>

         <Tabs  color="black" size="lg" align="center">
            <TabList  border="none">
                <Tab   mr="1rem"   pl="1rem" pr="1rem">
                    <HStack>
                        <GrGrid/>
                        <Text>Posts</Text>
                    </HStack>
                </Tab>
                <Tab     mr="1rem"   pl="1rem" pr="1rem">
                    <HStack>
                        <MdOutlineVideoCameraFront/>
                        <Text>Reels</Text>
                    </HStack>
                </Tab>
                <Tab    mr="1rem"   pl="1rem" pr="1rem">
                    <HStack>
                        <GrBookmark/>
                        <Text>Saved</Text>
                    </HStack>
                </Tab>
                <Tab     mr="1rem"   pl="1rem" pr="1rem">
                    <HStack>
                        <BiUserPin/>
                        <Text>Tagged</Text>
                    </HStack>
                </Tab>
            </TabList>

            <TabPanels>
                <TabPanel >
                        <Box   margin="auto" >
                          <Grid gap={6}  templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)", lg: "repeat(3,1fr)" }} pt="5rem">
                        {Mypost?.map((el)=>{
                                    return <GridItem background="black" margin="auto" backgroundPosition="center"  textAlign="center"  cursor="pointer"    backgroundRepeat="no-repeat" backgroundSize="contain"   backgroundImage={el?.avatar} key={el._id}>
                                        <ProfilePost likes={5} comments={1} />
                                        
                                    </GridItem>
                                })}
                            </Grid>
                        </Box>
                </TabPanel>
                <TabPanel >
                        <Box   margin="auto" >
                        {Myreels? <Grid   templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)", lg: "repeat(3,1fr)" }} pt="5rem" gap={6}>
                        {Myreels?.map((el)=>{
                                    return <GridItem background="black" margin="auto" backgroundPosition="center"  textAlign="center"  cursor="pointer"    backgroundRepeat="no-repeat" backgroundSize="contain"   backgroundImage={el?.avatar} key={el._id}>
                                        <ProfilePost likes={5} comments={1} />
                                        
                                    </GridItem>
                                })}
                            </Grid>:<Text>No reels yet</Text>}
                        </Box>
                </TabPanel>
                <TabPanel >
                        <Box   margin="auto" >
                      {saved?  <Grid   templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)", lg: "repeat(3,1fr)" }} pt="5rem" gap={6}>
                        {saved?.map((el)=>{
                                    return <GridItem background="black" margin="auto" backgroundPosition="center"  textAlign="center"  cursor="pointer"    backgroundRepeat="no-repeat" backgroundSize="contain"   backgroundImage={el?.avatar} key={el._id}>
                                        <ProfilePost likes={5} comments={1} />
                                        
                                    </GridItem>
                                })}
                            </Grid>:<Text>No saved Post</Text>}
                        </Box>
                </TabPanel>

                <TabPanel >
                        <Box overflow="scroll"   margin="auto" >
                      { taggedPosts?  <Grid    templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)", lg: "repeat(3,1fr)" }} pt="5rem" gap={6} >
                        {taggedPosts?.map((el)=>{
                                    return <GridItem m="1rem" background="black" margin="auto" backgroundPosition="center"  textAlign="center"  cursor="pointer"    backgroundRepeat="no-repeat" backgroundSize="contain"   backgroundImage={el?.avatar} key={el._id}>
                                        <ProfilePost likes={5} comments={1} />
                                        
                                    </GridItem>
                                })}
                            </Grid>:<Text>No tagged Post</Text>}
                        </Box>
                </TabPanel>
            </TabPanels>
        </Tabs >
       </>}
    </Container>
  )
}
