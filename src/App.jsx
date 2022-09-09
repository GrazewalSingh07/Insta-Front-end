 import {Routes, Route} from "react-router-dom"
import { Home } from "./components/Home"
import { Navbar } from "./components/Navbar"
import { Welcome } from "./components/Welcome"
import { WelcomeFooter } from "./components/WelcomeFooter"
import { Profile } from "./Pages.jx/Profile"
function App() {
   
  return (
    <>
    
     <Routes>
        <Route path="/" element={ <Welcome/>}></Route>
        <Route path="/dashboard" element={<><Navbar /><Home/></>}></Route>
        <Route path="/:user_name" element={<><Navbar /><Profile/></>}/>
     </Routes>
     </>
  )
}

export default App
