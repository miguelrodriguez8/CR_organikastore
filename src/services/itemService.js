import axios from "axios";

var data = [];

class ItemService {
  serverUrl = "http://fsdi.azurewebsites.net/api/";

  async getProducts() {
    //retrieve products from the back end

    //JS FETCH

    const resp = await axios.get(this.serverUrl + '/products');
    return resp.data;
  }
  
  //cart = array of products
  async saveCart(userName, cart) {

    let data = {
      user: userName,
      total: 0,
      products: cart
    };

    // Verify if there is a cart for Miguel
    //if so, send PUT
    // else sent POST

    const resp = await axios.post(this.serverUrl + '/cart', data);
    console.log(resp);
  }
}

export default ItemService;
