import React, { Component } from "react";
import "./itemInCart.css";
import { removeProduct } from "../store/actions";
import { connect } from "react-redux";

class ItemInCart extends Component {
  state = {};
  render() {
    return (
      <div className="cartItem">
        <img
          src={"./images/" + this.props.info.product.image}
          alt="product"
        ></img>

        <div className="productInfo">
          <label className="description">{this.props.info.product.title}</label>
          <label className="price"> ${this.props.info.product.price}</label>
        </div>

        <label className="quantity">{this.props.info.quantity}</label>

        <label className="total">
          ${this.props.info.quantity * this.props.info.product.price}
        </label>

        <i
          onClick={this.removeProduct}
          className="fa fa-trash-o remove"
          aria-hidden="true"
        ></i>
      </div>
    );
  }

  removeProduct = () => {
    console.log("Removing product " + this.props.info.product.title);
    this.props.removeProduct(this.props.info.product.id);
  };
}

export default connect(null, { removeProduct })(ItemInCart);
