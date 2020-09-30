import React, { Component } from "react";
import Item from "./item";
import ItemService from "../services/itemService";
import "./catalog.css";

class Catalog extends Component {
  state = {
    items: [],
    categories: [],
    selectedCategory: "",
  };

  render() {
    let itemsToDisplay = this.state.items;

    if (this.state.selectedCategory) {
      itemsToDisplay = itemsToDisplay.filter(
        (item) => item.category === this.state.selectedCategory
      );
    }

    return (
      <div className="catalog-page">
        <div className="categories">
          <div
            className="category"
            key=""
            onClick={() => this.selectCategory("")}
          >
            <h6>All Items</h6>
          </div>
          {this.state.categories.map((category) => (
            <div
              className={this.getCategoryClass(category)}
              key={category}
              onClick={() => this.selectCategory(category)}
            >
              <h6>{category}</h6>
            </div>
          ))}
        </div>

        <h2>Our Amazing Catalog</h2>

        <div className="products">
          {itemsToDisplay.map((i) => (
            <Item key={i.id} product={i}></Item>
          ))}
        </div>
      </div>
    );
  }

  getCategoryClass = (catName) => {
    let catClass = "category";
    if (catName === this.state.selectedCategory) {
      catClass += " active-cat";
    }

    return catClass;
  };

  selectCategory = (catName) => {
    //update the state
    this.setState({ selectedCategory: catName });
  };

  async componentDidMount() {
    //perfect place to get data from server / DB / AJAX call
    let service = new ItemService();
    const data = await service.getProducts();
    this.setState({ items: data });

    // identify the unique categories from data

    let cats = [];
    for (let i = 0; i < data.length; i++) {
      let item = data[i];
      if (!cats.includes(item.category)) {
        cats.push(item.category);
      }
    }
    // push the array with those categories
    // set it to the state
    this.setState({ categories: cats });
  }
}
export default Catalog;
