import { createContext } from "react";
import { foodList } from "../../category";

export const StoreContext=createContext(null)


export const StoreContextProvider=(props)=>{


    const contextValue={
        foodList

    }

    return(
        <StoreContext.Provider  value={contextValue} >
            {props.children}
        </StoreContext.Provider >
    )

}

export default StoreContextProvider