import React, { useState } from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collections from '../components/Collection'
import Footer from '../components/Footer'

import  {Gents,Ladies} from '../data'
import WomensCollection from '../components/WomensCollection'
const MainPage = () => {

  const [gentsFashon,setGentsFashon] = useState(Gents); 
  const [ladiesFashon,setLadiesFashon] = useState(Ladies); 
  console.log(Gents)
  return (
    <div>
        <Header/>
        <Banner/>
        <Collections gentsFashon= {gentsFashon}/>
        <WomensCollection ladiesFashon= {ladiesFashon}/>
        <Footer/>
    </div>
  )
}

export default MainPage