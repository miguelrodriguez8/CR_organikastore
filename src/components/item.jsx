import React, { Component } from "react";
import QuantityPicker from "./quantityPicker";
import "./item.css";
import { incrementCartCounter, addProduct } from "../store/actions";
import { connect } from "react-redux";
import ItemService from "../services/itemService";

class Item extends Component {
  state = {
    minimum: this.props.product.minimum || 1,
    quantity: this.props.product.minimum || 1,
  };

  render() {
    return (
      <div className="item">
        <img src={"/images/" + this.props.product.image} alt="Product"></img>

        <h4>{this.props.product.title}</h4>

        <div className="prices">
          <h5>
            <span className="price-title">Total</span> $
            {this.props.product.price * this.state.quantity}
          </h5>
          <h6>
            <span className="price-title">Price</span> $
            {this.props.product.price}{" "}
          </h6>
        </div>

        <QuantityPicker
          value={this.state.quantity}
          minimum={this.state.minimum}
          onValueChange={(qnt) => this.handleQuantityChange(qnt)}
        ></QuantityPicker>

        <button
          onClick={this.addProductToCart}
          className="btn btn-sm btn-primary btn-add"
        >
          <i className="fa fa-cart-plus" aria-hidden="true"></i>
        </button>
      </div>
    );
  }

  addProductToCart = () => {
    const addedProduct = {
      product: this.props.product,
      quantity: this.state.quantity,
    };

    this.props.addProduct(addedProduct);
    this.props.incrementCartCounter();

    //update cart on the server
  };
  handleQuantityChange = (qnt) => {
    this.setState({ quantity: qnt });
  };
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, { incrementCartCounter, addProduct })(
  Item
);
