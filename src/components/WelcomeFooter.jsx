import { Container,Text,HStack,Menu, Select } from "@chakra-ui/react" 

export const WelcomeFooter=()=>{
    return  <Container justifyItems="center" textAlign="center"  maxW="max-content">
    <Container maxW="max-content" margin="auto" >
       <HStack  margin="auto" textAlign="center">
       <Text fontSize="smaller"> Meta</Text>
       <Text fontSize="smaller">About</Text>
       <Text fontSize="smaller">Blog</Text>
       <Text fontSize="smaller">Jobs</Text>
       <Text fontSize="smaller">Help</Text>
       <Text fontSize="smaller">API</Text>
       <Text fontSize="smaller">Privacy</Text>
       <Text fontSize="smaller">Terms</Text>
       <Text fontSize="smaller">Top Accounts</Text>
       <Text fontSize="smaller">Hashtags</Text>
       <Text fontSize="smaller">Locations</Text>
       <Text fontSize="smaller">Instagram Lite</Text>
       <Text width="auto" fontSize="smaller">Contact Uploading & Non-Users</Text>
    </HStack>
   </Container>
    <Container texxAlign="center" mt={5} >
    <HStack margin="auto" textAlign="center">
       <Text fontSize="smaller">Dance</Text>
       <Text fontSize="smaller">Food & Drink</Text>
       <Text fontSize="smaller">Home & Garden</Text>
       <Text fontSize="smaller">Music</Text>
       <Text fontSize="smaller">Visual Arts</Text>

    </HStack>
   
    </Container>
    <Container margin="auto" mt={5} >
    <HStack  textAlign="center">
       <Select variant="ghost" width="auto" placeholder="english" defaultValue="English" >
         <option>English</option>
         <option>Hindi</option>
         <option></option>
         <option>Gujrati</option>
         <option>Bengali</option>
         <option>Tamil</option>
         <option>urdu</option>
         <option>Kannad</option>
         <option>Marathi</option>
         
       </Select>
       <Text>© 2022 Instagram from Meta</Text>
    </HStack>
    </Container>
</Container>
}