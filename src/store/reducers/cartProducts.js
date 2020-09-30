import ItemService from "../../services/itemService";

const cartProductsReducer = (state = [], action) => {
  
  switch (action.type) {
    case "ADD_PRODUCT":
      /**
       * algorithm to add items to the cart
       *
       *
       */

      const prodCode = action.payload.product.id;
      // check if there's another product with the same code on the cart
      let found = false;
      let cart = [...state]; //copy the state
      for (let i = 0; i < state.length; i++) {
        const prod = cart[i];
        if (prod.product.id === prodCode) {
          prod.quantity += action.payload.quantity;
          found = true;
        }
      }

      // the cart doesn't contains the items
      if (!found) {
        cart.push(action.payload);
      }

      let service = new ItemService();

      // Verify if there is a cart for mIGUEL

      //

      service.saveCart("Miguel", cart);

      return cart;

    case "REMOVE_PRODUCT":
      /**
       * create of the state
       * travel the array
       * look for the item with id = action.payload
       * remove that item
       * return the copy
       */

      //let copy = [...state];
      //for(let i=0; i< copy.length; i++) {
      //  if(copy[i].product.id === action.payload) {
      //    return copy.splice(i, 1);
      //}
      //}

      return [...state.filter((pc) => pc.product.id !== action.payload)];

    default:
      return state;
  }
};

export default cartProductsReducer;
