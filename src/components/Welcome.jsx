import {
  Container,
  Input,
  HStack,
  Image,
  VStack,
  Divider,
  Text,
  Button,
  Menu,
  Heading,
  Box,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { GrFacebook } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/SignIn/action";
import { WelcomeFooter } from "./WelcomeFooter";

import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { register } from "../Redux/Signup/action";
import { Navigate } from "react-router-dom";
export const Welcome = () => {
  const dispatch = useDispatch();
  const isLoggedIN= useSelector((state)=>state.loginReducer.token)
  const [loginData, setLoginData] = useState({});
  const [SignUpData, setSingUpData] = useState({});
  const [passwordState, setPasswordState] = useState(false);
  const [signUp, setSignup] = useState(false);
  const images = [
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png",
  ];
  const [slideImage, setSlideImage] = useState(0);

  const [count, setcount] = useState(0);

  useEffect(() => {
    let id = setInterval(() => {
      setcount((prev) => prev + 1);
    }, 2000);
    return () => {
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    if (slideImage == 2) {
      setSlideImage(0);
    } else {
      setSlideImage(slideImage + 1);
    }
  }, [count]);

  const handleChangelogin = (e) => {
    const { id, value } = e.target;
    setLoginData({ ...loginData, [id]: value });
  };
  const handleChangeSignUp = (e) => {
    const { id, value } = e.target;
    setSingUpData({ ...SignUpData, [id]: value });
  };
  const handleLogin = () => {
    dispatch(login(loginData));
  };
  const handleSignUp=()=>{
    dispatch(register(SignUpData))
  }

  if(isLoggedIN){
    return <Navigate to="/dashboard"/>
  }
  return (
    <>
      <Box height="100%" pt="8rem" width="60%" margin="auto">
        <Container maxW="container.md" display="flex">
         
          {!signUp ? (
            <> <Image
            p="1rem"
            display={["none", "none", "block"]}
            backgroundRepeat="no-repeat"
            backgroundImage="https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png"
            pl="9.5rem"
            pt="2rem"
            objectFit="contain"
       
            src={images[slideImage]}
            
          />
         <Container maxW="container.md">
              <VStack pt={5} pl={5} pr={5} border="1px solid gray">
                <Image
                  padding={5}
                  src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
                />
               <InputGroup>
                    <Input
                        id="email"
                        onChange={handleChangelogin}
                        borderRadius="none"
                        outline="none"
                        type={"email" || "text"}
                        placeholder="username/email"
                        />
               </InputGroup>
                <InputGroup>
                  <Input
                    id="password"
                    onChange={handleChangelogin}
                    borderRadius="none"
                    placeholder="password"
                    type={passwordState ? "text" : "password"}
                  />
                  <InputRightElement onClick={()=>{
                    setPasswordState(!passwordState)
                  }}
                    children={
                      passwordState ? <AiFillEye /> : <AiFillEyeInvisible />
                    }
                  />
                </InputGroup>
                <Button onClick={handleLogin} width="100%" colorScheme="blue">
                  Log In
                </Button>
                <HStack width="100%">
                  <Divider orientation="horizontal" />
                  <Text>OR</Text>
                  <Divider orientation="horizontal" />
                </HStack>
                <Button width="100%" leftIcon={<GrFacebook />}>
                  Log in with Facebook
                </Button>
                <Button
                  width="100%"
                  fontWeight={400}
                  fontSize="smaller"
                  variant="unstyled"
                >
                  Forgot password?
                </Button>
              </VStack>
              <HStack
                mt={5}
                textAlign="center"
                pl={10}
                pt={2}
                pb={2}
                border="1px solid grey"
              >
                <Text>Don't have an account?</Text>

                <Button variant="unstyled" onClick={() => setSignup(true)}>
                  Sign up
                </Button>
              </HStack>
              <Text p={5} textAlign="center">
                Get the App
              </Text>

              <HStack width="100%">
                <Image
                  width="50%"
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                />
                <Image
                  width="50%"
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                />
              </HStack>
            </Container>
            </>
           
          ) : (
            <>
             <Image
             height="100%"
                p="1rem"
                display={["none", "none", "block"]}
                backgroundRepeat="no-repeat"
                backgroundImage="https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png"
                pl="9.5rem"
                pt="1.5rem"
                objectFit="contain"
        
                src={images[slideImage]}
                
            />
            <Container maxW="container.md"    >
              <VStack pt={5} pl={5} pr={5} border=".5px solid grey">
                <Image
                  padding={5}
                  src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
                />
                <Heading color="grey" textAlign="center" fontSize="small">
                  Sign up to see photos and video <br /> from your friends
                </Heading>
                <Button width="100%" colorScheme="blue" leftIcon={<GrFacebook />}>
                  Log in with Facebook
                </Button>
                <HStack width="100%">
                  <Divider orientation="horizontal" />
                  <Text>OR</Text>
                  <Divider orientation="horizontal" />
                </HStack>

               <InputGroup>
                <Input
                    onChange={handleChangeSignUp}
                    id="email"
                    borderRadius="none"
                    outline="none"
                    type={"email" || "number"}
                    placeholder="Mobile number or email address"
                    />
                </InputGroup>
                <InputGroup>
                    <Input
                    onChange={handleChangeSignUp}
                    id="fullname"
                    borderRadius="none"
                    outline="none"
                    placeholder="Full Name"
                    />
                </InputGroup>
               <InputGroup>
                <Input
                    onChange={handleChangeSignUp}
                    id="username"
                    borderRadius="none"
                    outline="none"
                    placeholder="Username"
                    />
               </InputGroup>
               <InputGroup>

                <Input
                    onChange={handleChangeSignUp}
                    id="password"
                    borderRadius="none"
                    placeholder="password"
                    type={passwordState}
                    />
                </InputGroup>
                <Button onClick={handleSignUp} width="100%" colorScheme="blue">
                  Sign up
                </Button>

                <Button
                  width="100%"
                  fontWeight={400}
                  fontSize="smaller"
                  variant="unstyled"
                >
                  Forgot password?
                </Button>
              </VStack>
              <HStack
                mt={5}
                textAlign="center"
                pl={10}
                pt={2}
                pb={2}
                border="1px solid grey"
              >
                <Text>Don't have an account?</Text>

                <Button variant="unstyled" onClick={() => setSignup(false)}>
                  Log in
                </Button>
              </HStack>
              <Text p={5} textAlign="center">
                Get the App
              </Text>

              <HStack width="100%">
                <Image
                  width="50%"
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                />
                <Image
                  width="50%"
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                />
              </HStack>
            </Container>
            </>
          )}
        </Container>
        
        {/* <WelcomeFooter/> */}
      </Box>
    </>
  );
};
