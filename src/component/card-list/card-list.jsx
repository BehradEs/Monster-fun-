import React from 'react'
import {card, Card} from '../card/card'
import './card-list.style.css'

export const CardList =props =>{
return (<div className='card-list'>
    {
      props.monster.map(monster=>
      <Card key={monster.id} monster={monster}/>)
     }
</div>)  
} 
