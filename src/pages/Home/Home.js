import React from 'react'
import { CardM } from '../../components/cardMaterial/CardM'
import { Card } from '../../components/cardBootstrap/Card'
import { useGlobalContext } from '../../App'
const Home = () => {
  const { isStyleBootstrap } = useGlobalContext()
  return (
    <div>
      {isStyleBootstrap === false ? <Card /> : <CardM />}
      {/* <CardM />
      <Card /> */}
    </div>
  )
}

export default Home
