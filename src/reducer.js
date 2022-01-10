export const initialState = {
    basket: [],
};

export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0) //reduce takes a function amount and item // accumulating al the prices at orignal amount

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            //Logic for adding item to basket
            // return { state};
            return {
                ...state,
                basket: [...state.basket, action.item],
              }
            // break;
            case 'REMOVE_FROM_BASKET':
                //Logic for removing item from basket

                //we cloned the basket
                let newBasket = [...state.basket];

                const index = state.basket.findIndex(
                    (basketItem) => basketItem.id === action.id
                    );

                if (index >= 0) {
                    //item exists in basket, remove it..
                    newBasket.splice(index, 1)
                }
                // } else {
                //     console.warn(
                //         'cant remove product (id: ${action.id}) as its not in basket'
                //     );
                // }
            return { 
                ...state,
                basket: newBasket,
            };
            // break;
                default:
                    return state;
    }
}

export default reducer;