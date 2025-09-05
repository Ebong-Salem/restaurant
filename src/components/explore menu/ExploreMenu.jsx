import React from 'react'
import './ExploreMenu.css'
import { menu } from '../../category'

const ExploreMenu = ({category,setCategory}) => {
  return (
    
    <div className="exploreMenu" id='menu'>
        <h1>Explorez notre differentes varietes de menus</h1>
          <p>
            choississez dans cette diversite de plats, le plats qui emoustillent vos papillent.Notre mission est de vous satisfaire et de rendre votre esperience culinaire inoubliable!

        </p>

        <div className="food-list">
            {
                menu.map((items,index)=>{
                    return(
                        <div key={index}  onClick={()=>setCategory(prev=>prev===items.name?'all':items.name)} className="food-list-menu">
                            <img src={items.image} className={category===items.name?'active':""} alt=" images de categories de plats"  />
                            <p>{items.name}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ExploreMenu