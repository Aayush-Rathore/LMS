//import { useState } from 'react'
//import DefaultHeader from './Components/DefaultHeader'

import NewHeader from "./Components/NewHeader";
//import { AuthPage } from "./Pages/AuthPage";
import Routers from "./Providers/Routers";

//const [count, setCount] = useState(0)

export default function App() {
  return (
    <>
     {/* <DefaultHeader/> */}
     <NewHeader />
    <Routers/>

     {/* <HeroSection className='mt-[25px] '/> */}
    </>
  )
}