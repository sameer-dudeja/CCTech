import React from 'react'

import { useGlobalContext } from '../../components/context/Context'
import { Card } from '../../components/cardBootstrap/Card'
import { CardM } from '../../components/cardMaterial/CardM'

const Home = () => {
  const { isStyleBootstrap } = useGlobalContext()

  return <div>{isStyleBootstrap === true ? <Card /> : <CardM />}</div>
}

export default Home
