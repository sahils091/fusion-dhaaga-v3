export const initialState = {
    basket: [],
};


const reducer =(state, action) => {
    console.log(action, "show me the action")

    switch (action.type){
         case 'ADD_TO_BASKET':
            // adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            }

         
         case 'REMOVE_FROM_BASKET':
             //remove from basket 
             return {state}
      
        default:
          return state  
    }
}


export default reducer;