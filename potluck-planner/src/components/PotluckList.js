import PotluckCard from './PotluckCard'
import React from 'react'
import { data } from '../dummyData'

const PotluckList = () => {
  return(
    <div>
      {data.map(obj => {
        return <PotluckCard data={obj} key={obj.id} />
      })}
    </div>
  )
}

export default PotluckList