let defaultState = {
    selectedItems: { items: [], restaurantName: '' }
}

let cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            let newState = { ...state }
            if (action.payload.checkboxValue) {
                console.log("Añadiendo comida al carrito")
                let newState = { ...state };
                newState.selectedItems = {
                    items: [...newState.selectedItems.items, action.payload],
                    restaurantName: action.payload.restaurantName
                }
                console.log(newState, " 👉 ")
                return newState
            } else {
                console.log("Comida removida del carrito")
                newState.selectedItems = {
                    items: [
                        ...newState.selectedItems.items.filter((item) => item.title !== action.payload.title)
                    ],
                    restaurantName: action.payload.restaurantName,
                }
            }
            console.log(newState, "👉");
            return newState;
        }
        default:
            return state;
    }
};

export default cartReducer;