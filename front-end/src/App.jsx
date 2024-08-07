//import { useState } from 'react'
//import DefaultHeader from './Components/DefaultHeader'

import HeroSection from "./Components/HeroSection";
import NewHeader from "./Components/NewHeader";








//const [count, setCount] = useState(0)

export default function App() {
  return (
    <>
     {/* <DefaultHeader/> */}
     <NewHeader/>
     <HeroSection className='mt-[25px] '/>
    </>
  )
}