
import './FoodDisplay.css'
import { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'


const FoodDisplay = ({category}) => {

    const {foodList} =useContext(StoreContext)

  return (
   <div className="food-display" id='galerie'>
    <h1>vos plats pres de chez vous</h1>

    <div className="food-display-menu">
        {
            foodList.map((item,index)=>{

                if (category==='all'|| category===item.category){
                        return(
                    <div key={index} className="food-menu">
                        <img src={item.image} alt="" />

                        <div className="cont">
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>

                            <p>${item.prix}</p>
                        </div>

                    </div>
                )

                }
            
            })
        }

    </div>
   </div>
  )
}

export default FoodDisplay