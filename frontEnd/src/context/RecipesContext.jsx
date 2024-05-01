import { createContext } from "react";
import { food_list } from "../Assets/assets";
export const RecipesContext = createContext(null)

const RecipesContextProvider =(props)=>{
   
   
   
   
    const contextValue= {
   food_list
    }
     
    return(
        <RecipesContext.Provider value={contextValue}>
            {props.children}
        </RecipesContext.Provider>
    )
}
export default RecipesContextProvider;